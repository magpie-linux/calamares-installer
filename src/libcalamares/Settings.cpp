/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2019, Dominic Hayes <ferenosdev@outlook.com>
 *   Copyright 2019, Gabriel Craciunescu <crazy@frugalware.org>
 *   Copyright 2014-2015, Teo Mrnjavac <teo@kde.org>
 *   Copyright 2017-2018, Adriaan de Groot <groot@kde.org>
 *
 *   Calamares is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   Calamares is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with Calamares. If not, see <http://www.gnu.org/licenses/>.
 */

#include "Settings.h"

#include "utils/Dirs.h"
#include "utils/Logger.h"
#include "utils/Yaml.h"

#include <QDir>
#include <QFile>
#include <QPair>

static bool
hasValue( const YAML::Node& v )
{
    return v.IsDefined() && !v.IsNull();
}

/** @brief Helper function to grab a QString out of the config, and to warn if not present. */
static QString
requireString( const YAML::Node& config, const char* key )
{
    auto v = config[ key ];
    if ( hasValue( v ) )
    {
        return QString::fromStdString( v.as< std::string >() );
    }
    else
    {
        cWarning() << Logger::SubEntry << "Required settings.conf key" << key << "is missing.";
        return QString();
    }
}

/** @brief Helper function to grab a bool out of the config, and to warn if not present. */
static bool
requireBool( const YAML::Node& config, const char* key, bool d )
{
    auto v = config[ key ];
    if ( hasValue( v ) )
    {
        return v.as< bool >();
    }
    else
    {
        cWarning() << Logger::SubEntry << "Required settings.conf key" << key << "is missing.";
        return d;
    }
}

namespace Calamares
{

Settings* Settings::s_instance = nullptr;

Settings*
Settings::instance()
{
    return s_instance;
}

static void
interpretModulesSearch( const bool debugMode, const QStringList& rawPaths, QStringList& output )
{
    for ( const auto& path : rawPaths )
    {
        if ( path == "local" )
        {
            // If we're running in debug mode, we assume we might also be
            // running from the build dir, so we add a maximum priority
            // module search path in the build dir.
            if ( debugMode )
            {
                QString buildDirModules
                    = QDir::current().absolutePath() + QDir::separator() + "src" + QDir::separator() + "modules";
                if ( QDir( buildDirModules ).exists() )
                {
                    output.append( buildDirModules );
                }
            }

            // Install path is set in CalamaresAddPlugin.cmake
            output.append( CalamaresUtils::systemLibDir().absolutePath() + QDir::separator() + "calamares"
                           + QDir::separator() + "modules" );
        }
        else
        {
            QDir d( path );
            if ( d.exists() && d.isReadable() )
            {
                output.append( d.absolutePath() );
            }
            else
            {
                cDebug() << Logger::SubEntry << "module-search entry non-existent" << path;
            }
        }
    }
}

static void
interpretInstances( const YAML::Node& node, Settings::InstanceDescriptionList& customInstances )
{
    // Parse the custom instances section
    if ( node )
    {
        QVariant instancesV = CalamaresUtils::yamlToVariant( node ).toList();
        if ( instancesV.type() == QVariant::List )
        {
            const auto instances = instancesV.toList();
            for ( const QVariant& instancesVListItem : instances )
            {
                if ( instancesVListItem.type() != QVariant::Map )
                {
                    continue;
                }
                QVariantMap instancesVListItemMap = instancesVListItem.toMap();
                Settings::InstanceDescription instanceMap;
                for ( auto it = instancesVListItemMap.constBegin(); it != instancesVListItemMap.constEnd(); ++it )
                {
                    if ( it.value().type() != QVariant::String )
                    {
                        continue;
                    }
                    instanceMap.insert( it.key(), it.value().toString() );
                }
                customInstances.append( instanceMap );
            }
        }
    }
}

static void
interpretSequence( const YAML::Node& node, Settings::ModuleSequence& moduleSequence )
{
    // Parse the modules sequence section
    if ( node )
    {
        QVariant sequenceV = CalamaresUtils::yamlToVariant( node );
        if ( !( sequenceV.type() == QVariant::List ) )
        {
            throw YAML::Exception( YAML::Mark(), "sequence key does not have a list-value" );
        }

        const auto sequence = sequenceV.toList();
        for ( const QVariant& sequenceVListItem : sequence )
        {
            if ( sequenceVListItem.type() != QVariant::Map )
            {
                continue;
            }
            QString thisActionS = sequenceVListItem.toMap().firstKey();
            ModuleAction thisAction;
            if ( thisActionS == "show" )
            {
                thisAction = ModuleAction::Show;
            }
            else if ( thisActionS == "exec" )
            {
                thisAction = ModuleAction::Exec;
            }
            else
            {
                continue;
            }

            QStringList thisActionRoster = sequenceVListItem.toMap().value( thisActionS ).toStringList();
            moduleSequence.append( qMakePair( thisAction, thisActionRoster ) );
        }
    }
    else
    {
        throw YAML::Exception( YAML::Mark(), "sequence key is missing" );
    }
}

Settings::Settings( const QString& settingsFilePath, bool debugMode, QObject* parent )
    : QObject( parent )
    , m_debug( debugMode )
    , m_doChroot( true )
    , m_promptInstall( false )
    , m_disableCancel( false )
    , m_disableCancelDuringExec( false )
{
    cDebug() << "Using Calamares settings file at" << settingsFilePath;
    QFile file( settingsFilePath );
    if ( file.exists() && file.open( QFile::ReadOnly | QFile::Text ) )
    {
        QByteArray ba = file.readAll();

        try
        {
            YAML::Node config = YAML::Load( ba.constData() );
            Q_ASSERT( config.IsMap() );

            interpretModulesSearch(
                debugMode, CalamaresUtils::yamlToStringList( config[ "modules-search" ] ), m_modulesSearchPaths );
            interpretInstances( config[ "instances" ], m_customModuleInstances );
            interpretSequence( config[ "sequence" ], m_modulesSequence );

            m_brandingComponentName = requireString( config, "branding" );
            m_promptInstall = requireBool( config, "prompt-install", false );
            m_doChroot = !requireBool( config, "dont-chroot", false );
            m_isSetupMode = requireBool( config, "oem-setup", !m_doChroot );
            m_disableCancel = requireBool( config, "disable-cancel", false );
            m_disableCancelDuringExec = requireBool( config, "disable-cancel-during-exec", false );
        }
        catch ( YAML::Exception& e )
        {
            CalamaresUtils::explainYamlException( e, ba, file.fileName() );
        }
    }
    else
    {
        cWarning() << "Cannot read settings file" << file.fileName();
    }

    s_instance = this;
}


QStringList
Settings::modulesSearchPaths() const
{
    return m_modulesSearchPaths;
}


Settings::InstanceDescriptionList
Settings::customModuleInstances() const
{
    return m_customModuleInstances;
}


Settings::ModuleSequence
Settings::modulesSequence() const
{
    return m_modulesSequence;
}


QString
Settings::brandingComponentName() const
{
    return m_brandingComponentName;
}


bool
Settings::showPromptBeforeExecution() const
{
    return m_promptInstall;
}


bool
Settings::debugMode() const
{
    return m_debug;
}

bool
Settings::doChroot() const
{
    return m_doChroot;
}

bool
Settings::disableCancel() const
{
    return m_disableCancel;
}

bool
Settings::disableCancelDuringExec() const
{
    return m_disableCancelDuringExec;
}


}  // namespace Calamares

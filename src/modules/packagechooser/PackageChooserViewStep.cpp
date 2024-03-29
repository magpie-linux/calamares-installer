/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2019, Adriaan de Groot <groot@kde.org>
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

#include "PackageChooserViewStep.h"

#include "PackageChooserPage.h"
#include "PackageModel.h"

#include "GlobalStorage.h"
#include "JobQueue.h"

#include "utils/CalamaresUtilsSystem.h"
#include "utils/Logger.h"
#include "utils/Variant.h"

#include <QDesktopServices>
#include <QVariantMap>

CALAMARES_PLUGIN_FACTORY_DEFINITION( PackageChooserViewStepFactory, registerPlugin< PackageChooserViewStep >(); )

PackageChooserViewStep::PackageChooserViewStep( QObject* parent )
    : Calamares::ViewStep( parent )
    , m_widget( nullptr )
    , m_model( nullptr )
    , m_mode( PackageChooserMode::Required )
{
    emit nextStatusChanged( false );
}


PackageChooserViewStep::~PackageChooserViewStep()
{
    if ( m_widget && m_widget->parent() == nullptr )
    {
        m_widget->deleteLater();
    }
    delete m_model;
}


QString
PackageChooserViewStep::prettyName() const
{
    return tr( "Packages" );
}


QWidget*
PackageChooserViewStep::widget()
{
    if ( !m_widget )
    {
        m_widget = new PackageChooserPage( m_mode, nullptr );
        connect( m_widget, &PackageChooserPage::selectionChanged, [=]() {
            emit nextStatusChanged( this->isNextEnabled() );
        } );

        if ( m_model )
        {
            hookupModel();
        }
        else
        {
            cWarning() << "PackageChooser Widget created before model.";
        }
    }
    return m_widget;
}


bool
PackageChooserViewStep::isNextEnabled() const
{
    if ( !m_model )
    {
        return false;
    }

    if ( !m_widget )
    {
        // No way to have changed anything
        return true;
    }

    switch ( m_mode )
    {
    case PackageChooserMode::Optional:
    case PackageChooserMode::OptionalMultiple:
        // zero or one OR zero or more
        return true;
    case PackageChooserMode::Required:
    case PackageChooserMode::RequiredMultiple:
        // exactly one OR one or more
        return m_widget->hasSelection();
    }

    NOTREACHED return true;
}


bool
PackageChooserViewStep::isBackEnabled() const
{
    return true;
}


bool
PackageChooserViewStep::isAtBeginning() const
{
    return true;
}


bool
PackageChooserViewStep::isAtEnd() const
{
    return true;
}


void
PackageChooserViewStep::onLeave()
{
    QString key = QStringLiteral( "packagechooser_%1" ).arg( m_id );
    QString value;
    if ( m_widget->hasSelection() )
    {
        value = m_widget->selectedPackageIds().join( ',' );
    }
    Calamares::JobQueue::instance()->globalStorage()->insert( key, value );

    cDebug() << "PackageChooser" << key << "selected" << value;
}

Calamares::JobList
PackageChooserViewStep::jobs() const
{
    Calamares::JobList l;
    return l;
}

void
PackageChooserViewStep::setConfigurationMap( const QVariantMap& configurationMap )
{
    QString mode = CalamaresUtils::getString( configurationMap, "mode" );
    bool ok = false;
    if ( !mode.isEmpty() )
    {
        m_mode = roleNames().find( mode, ok );
    }
    if ( !ok )
    {
        m_mode = PackageChooserMode::Required;
    }

    m_id = CalamaresUtils::getString( configurationMap, "id" );
    if ( m_id.isEmpty() )
    {
        // Not set, so use the instance id
        // TODO: use a stronger type than QString for structured IDs
        m_id = moduleInstanceKey().split( '@' ).last();
    }

    bool first_time = !m_model;
    if ( configurationMap.contains( "items" ) )
    {
        fillModel( configurationMap.value( "items" ).toList() );
    }

    if ( first_time && m_widget && m_model )
    {
        hookupModel();
    }
}

void
PackageChooserViewStep::fillModel( const QVariantList& items )
{
    if ( !m_model )
    {
        m_model = new PackageListModel( nullptr );
    }

    if ( items.isEmpty() )
    {
        cWarning() << "No *items* for PackageChooser module.";
        return;
    }

    cDebug() << "Loading PackageChooser model items from config";
    int item_index = 0;
    for ( const auto& item_it : items )
    {
        ++item_index;
        QVariantMap item_map = item_it.toMap();
        if ( item_map.isEmpty() )
        {
            cWarning() << "PackageChooser entry" << item_index << "is not valid.";
            continue;
        }

        if ( item_map.contains( "appdata" ) )
        {
            m_model->addPackage( PackageItem::fromAppData( item_map ) );
        }
        else
        {
            m_model->addPackage( PackageItem( item_map ) );
        }
    }
}

void
PackageChooserViewStep::hookupModel()
{
    if ( !m_model || !m_widget )
    {
        cError() << "Can't hook up model until widget and model both exist.";
        return;
    }

    m_widget->setModel( m_model );
}

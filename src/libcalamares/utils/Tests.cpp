/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2018, Adriaan de Groot <groot@kde.org>
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

#include "Tests.h"

#include "CalamaresUtilsSystem.h"
#include "Logger.h"
#include "UMask.h"
#include "Yaml.h"

#include <QTemporaryFile>

#include <QtTest/QtTest>

#include <fcntl.h>
#include <sys/stat.h>
#include <unistd.h>

QTEST_GUILESS_MAIN( LibCalamaresTests )

LibCalamaresTests::LibCalamaresTests() {}

LibCalamaresTests::~LibCalamaresTests() {}

void
LibCalamaresTests::initTestCase()
{
}

void
LibCalamaresTests::testDebugLevels()
{
    Logger::setupLogLevel( Logger::LOG_DISABLE );

    QCOMPARE( Logger::logLevel(), static_cast< unsigned int >( Logger::LOG_DISABLE ) );

    for ( unsigned int level = 0; level <= Logger::LOGVERBOSE; ++level )
    {
        Logger::setupLogLevel( level );
        QCOMPARE( Logger::logLevel(), level );
        QVERIFY( Logger::logLevelEnabled( level ) );

        for ( unsigned int xlevel = 0; xlevel <= Logger::LOGVERBOSE; ++xlevel )
        {
            QCOMPARE( Logger::logLevelEnabled( xlevel ), xlevel <= level );
        }
    }
}

void
LibCalamaresTests::testLoadSaveYaml()
{
    QFile f( "settings.conf" );
    // Find the nearest settings.conf to read
    for ( unsigned int up = 0; !f.exists() && ( up < 4 ); ++up )
    {
        f.setFileName( QString( "../" ) + f.fileName() );
    }
    cDebug() << QDir().absolutePath() << f.fileName() << f.exists();
    QVERIFY( f.exists() );

    auto map = CalamaresUtils::loadYaml( f.fileName() );
    CalamaresUtils::saveYaml( "out.yaml", map );

    auto other_map = CalamaresUtils::loadYaml( "out.yaml" );
    CalamaresUtils::saveYaml( " out2.yaml", other_map );
    QCOMPARE( map, other_map );

    QFile::remove( "out.yaml" );
    QFile::remove( "out2.yaml" );
}

static QStringList
findConf( const QDir& d )
{
    QStringList mine;
    if ( d.exists() )
    {
        QString path = d.absolutePath();
        path.append( d.separator() );
        for ( const auto& confname : d.entryList( { "*.conf" } ) )
            mine.append( path + confname );
        for ( const auto& subdirname : d.entryList( QDir::AllDirs | QDir::NoDotAndDotDot ) )
        {
            QDir subdir( d );
            subdir.cd( subdirname );
            mine.append( findConf( subdir ) );
        }
    }
    return mine;
}


void
LibCalamaresTests::testLoadSaveYamlExtended()
{
    for ( const auto& confname : findConf( QDir( "../src" ) ) )
    {
        cDebug() << "Testing" << confname;
        auto map = CalamaresUtils::loadYaml( confname );
        QVERIFY( CalamaresUtils::saveYaml( "out.yaml", map ) );
        auto othermap = CalamaresUtils::loadYaml( "out.yaml" );
        QCOMPARE( map, othermap );
    }
    QFile::remove( "out.yaml" );
}

void
LibCalamaresTests::testCommands()
{
    using CalamaresUtils::System;
    auto r = System::runCommand( System::RunLocation::RunInHost, { "/bin/ls", "/tmp" } );

    QVERIFY( r.getExitCode() == 0 );

    QTemporaryFile tf( "/tmp/calamares-test-XXXXXX" );
    QVERIFY( tf.open() );
    QVERIFY( !tf.fileName().isEmpty() );

    QFileInfo tfn( tf.fileName() );
    QVERIFY( !r.getOutput().contains( tfn.fileName() ) );

    // Run ls again, now that the file exists
    r = System::runCommand( System::RunLocation::RunInHost, { "/bin/ls", "/tmp" } );
    QVERIFY( r.getOutput().contains( tfn.fileName() ) );

    // .. and without a working directory set, assume builddir != /tmp
    r = System::runCommand( System::RunLocation::RunInHost, { "/bin/ls" } );
    QVERIFY( !r.getOutput().contains( tfn.fileName() ) );

    r = System::runCommand( System::RunLocation::RunInHost, { "/bin/ls" }, "/tmp" );
    QVERIFY( r.getOutput().contains( tfn.fileName() ) );
}

void
LibCalamaresTests::testUmask()
{
    struct stat mystat;

    QTemporaryFile ft;
    QVERIFY( ft.open() );

    mode_t m = CalamaresUtils::setUMask( 022 );
    QCOMPARE( CalamaresUtils::setUMask( m ), m );

    for ( int i = 0; i <= 0777 /* octal! */; ++i )
    {
        QByteArray name = ( ft.fileName() + QChar( '.' ) + QString::number( i, 8 ) ).toLatin1();
        CalamaresUtils::UMask um( i );
        int fd = creat( name, 0777 );
        QVERIFY( fd >= 0 );
        close( fd );
        QFileInfo fi( name );
        QVERIFY( fi.exists() );
        QCOMPARE( stat( name, &mystat ), 0 );
        QCOMPARE( mystat.st_mode & 0777, 0777 & ~i );
        QCOMPARE( unlink( name ), 0 );
    }
    QCOMPARE( CalamaresUtils::setUMask( 022 ), m );
    QCOMPARE( CalamaresUtils::setUMask( m ), 022 );
}

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

#include "Tests.h"

#include "PackageModel.h"

#include "utils/Logger.h"

#include <QtTest/QtTest>

QTEST_MAIN( PackageChooserTests )

PackageChooserTests::PackageChooserTests() {}

PackageChooserTests::~PackageChooserTests() {}

void
PackageChooserTests::initTestCase()
{
    Logger::setupLogLevel( Logger::LOGDEBUG );
}

void
PackageChooserTests::testBogus()
{
    QVERIFY( true );
}

void
PackageChooserTests::testAppData()
{
    // Path from the build-dir and from the running-the-test varies,
    // for in-source build, for build/, and for tests-in-build/,
    // so look in multiple places.
    QString appdataName( "io.calamares.calamares.appdata.xml" );
    for ( const auto& prefix : QStringList { "", "../", "../../../", "../../../../" } )
    {
        if ( QFile::exists( prefix + appdataName ) )
        {
            appdataName = prefix + appdataName;
            break;
        }
    }
    QVERIFY( QFile::exists( appdataName ) );

    QVariantMap m;
    m.insert( "appdata", appdataName );

    PackageItem p1 = PackageItem::fromAppData( m );
#ifdef HAVE_XML
    QVERIFY( p1.isValid() );
    QCOMPARE( p1.id, "io.calamares.calamares.desktop" );
    QCOMPARE( p1.name.get(), "Calamares" );
    // The <description> entry has precedence
    QCOMPARE( p1.description.get(), "Calamares is an installer program for Linux distributions." );
    // .. but en_GB doesn't have an entry in description, so uses <summary>
    QCOMPARE( p1.description.get( QLocale( "en_GB" ) ), "Calamares Linux Installer" );
    QCOMPARE( p1.description.get( QLocale( "nl" ) ), "Calamares is een installatieprogramma voor Linux distributies." );
    QVERIFY( p1.screenshot.isNull() );

    m.insert( "id", "calamares" );
    m.insert( "screenshot", ":/images/calamares.png" );
    PackageItem p2 = PackageItem::fromAppData( m );
    QVERIFY( p2.isValid() );
    QCOMPARE( p2.id, "calamares" );
    QCOMPARE( p2.description.get( QLocale( "nl" ) ), "Calamares is een installatieprogramma voor Linux distributies." );
    QVERIFY( !p2.screenshot.isNull() );
#else
    QVERIFY( !p1.isValid() );
#endif
}

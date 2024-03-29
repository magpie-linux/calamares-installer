/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2014-2015, Teo Mrnjavac <teo@kde.org>
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

#ifndef UTILS_RETRANSLATOR_H
#define UTILS_RETRANSLATOR_H

#include "DllMacro.h"

#include <QList>
#include <QObject>
#include <QString>

#include <functional>

class QEvent;
class QLocale;

namespace CalamaresUtils
{
/**
 * @brief installTranslator changes the application language.
 * @param locale the new locale.
 * @param brandingTranslationsPrefix the branding path prefix, from Calamares::Branding.
 * @param parent the parent QObject.
 */
DLLEXPORT void installTranslator( const QLocale& locale, const QString& brandingTranslationsPrefix, QObject* parent );

DLLEXPORT QString translatorLocaleName();

class Retranslator : public QObject
{
    Q_OBJECT
public:
    static void attachRetranslator( QObject* parent, std::function< void( void ) > retranslateFunc );

    void addRetranslateFunc( std::function< void( void ) > retranslateFunc );

protected:
    bool eventFilter( QObject* obj, QEvent* e ) override;

private:
    explicit Retranslator( QObject* parent );

    QList< std::function< void( void ) > > m_retranslateFuncList;
};


}  // namespace CalamaresUtils

#define CALAMARES_RETRANSLATE( body ) CalamaresUtils::Retranslator::attachRetranslator( this, [=] { body } );
#define CALAMARES_RETRANSLATE_WIDGET( widget, body ) \
    CalamaresUtils::Retranslator::attachRetranslator( widget, [=] { body } );

#endif

/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
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

#ifndef CALAMARES_GLOBALSTORAGE_H
#define CALAMARES_GLOBALSTORAGE_H

#include "CalamaresConfig.h"

#include <QVariantMap>

#ifdef WITH_PYTHON
namespace boost
{
namespace python
{
namespace api
{
class object;
}
class list;
}  // namespace python
}  // namespace boost
#endif

namespace Calamares
{

class DebugWindow;

class GlobalStorage : public QObject
{
    Q_OBJECT
public:
    explicit GlobalStorage();

    //NOTE: thread safety is guaranteed by JobQueue, which executes jobs one by one.
    //      If at any time jobs become concurrent, this class must be made thread-safe.
    bool contains( const QString& key ) const;
    int count() const;
    void insert( const QString& key, const QVariant& value );
    QStringList keys() const;
    int remove( const QString& key );
    QVariant value( const QString& key ) const;

    /// @brief dump keys and values to the debug log
    void debugDump() const;

    /** @brief write as JSON to the given filename
     *
     * No tidying, sanitization, or censoring is done -- for instance,
     * the user module sets a slightly-obscured password in global storage,
     * and this JSON file will contain that password in-the-only-slightly-
     * obscured form.
     */
    bool save( const QString& filename );

    /** @brief Adds the keys from the given JSON file
     *
     * No tidying, sanitization, or censoring is done.
     * The JSON file is read and each key is added as a value to
     * the global storage.
     */
    bool load( const QString& filename );

    /** @brief write as YAML to the given filename
     *
     * See also save(), above.
     */
    bool saveYaml( const QString& filename );

    /// @brief reads settings from the given filename
    bool loadYaml( const QString& filename );

signals:
    void changed();

private:
    QVariantMap m;

    friend DebugWindow;
};

}  // namespace Calamares

#ifdef WITH_PYTHON
namespace CalamaresPython
{

class GlobalStoragePythonWrapper
{
public:
    explicit GlobalStoragePythonWrapper( Calamares::GlobalStorage* gs );

    bool contains( const std::string& key ) const;
    int count() const;
    void insert( const std::string& key, const boost::python::api::object& value );
    boost::python::list keys() const;
    int remove( const std::string& key );
    boost::python::api::object value( const std::string& key ) const;

    // This is a helper for scripts that do not go through
    // the JobQueue (i.e. the module testpython script),
    // which allocate their own (singleton) GlobalStorage.
    static Calamares::GlobalStorage* globalStorageInstance() { return s_gs_instance; }

private:
    Calamares::GlobalStorage* m_gs;
    static Calamares::GlobalStorage* s_gs_instance;  // See globalStorageInstance()
};

}  // namespace CalamaresPython
#endif

#endif  // CALAMARES_GLOBALSTORAGE_H

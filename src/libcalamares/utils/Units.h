/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2017, Adriaan de Groot <groot@kde.org>
 *   Copyright 2019, Collabora Ltd <arnaud.ferraris@collabora.com>
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

#ifndef UTILS_UNITS_H
#define UTILS_UNITS_H

#include <QtCore/QIntegerForSize>

namespace CalamaresUtils
{

/** User defined literals, 1_KiB is 1 KibiByte (= 2^10 bytes) */
constexpr qint64 operator""_KiB( unsigned long long m )
{
    return qint64( m ) * 1024;
}

/** User defined literals, 1_MiB is 1 MibiByte (= 2^20 bytes) */
constexpr qint64 operator""_MiB( unsigned long long m )
{
    return operator""_KiB(m)*1024;
}

/** User defined literals, 1_GiB is 1 GibiByte (= 2^30 bytes) */
constexpr qint64 operator""_GiB( unsigned long long m )
{
    return operator""_MiB(m)*1024;
}

constexpr qint64
KiBtoBytes( unsigned long long m )
{
    return operator""_KiB( m );
}

constexpr qint64
MiBtoBytes( unsigned long long m )
{
    return operator""_MiB( m );
}

constexpr qint64
GiBtoBytes( unsigned long long m )
{
    return operator""_GiB( m );
}

constexpr qint64
KiBtoBytes( double m )
{
    return qint64( m * 1024 );
}

constexpr qint64
MiBtoBytes( double m )
{
    return qint64( m * 1024 * 1024 );
}

constexpr qint64
GiBtoBytes( double m )
{
    return qint64( m * 1024 * 1024 * 1024 );
}

constexpr int
BytesToMiB( qint64 b )
{
    return int( b / 1024 / 1024 );
}

constexpr int
BytesToGiB( qint64 b )
{
    return int( b / 1024 / 1024 / 1024 );
}

constexpr qint64
alignBytesToBlockSize( qint64 bytes, qint64 blocksize )
{
    qint64 blocks = bytes / blocksize;

    if ( blocks * blocksize != bytes )
    {
        ++blocks;
    }
    return blocks * blocksize;
}

constexpr qint64
bytesToSectors( qint64 bytes, qint64 blocksize )
{
    return alignBytesToBlockSize( alignBytesToBlockSize( bytes, blocksize ), MiBtoBytes( 1ULL ) ) / blocksize;
}

}  // namespace CalamaresUtils
#endif

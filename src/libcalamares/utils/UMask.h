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

#ifndef UTILS_UMASK_H
#define UTILS_UMASK_H

#include "DllMacro.h"

#include <sys/types.h>

namespace CalamaresUtils
{
/// @brief Wrapper for umask(2)
DLLEXPORT mode_t setUMask( mode_t u );

/** @brief RAII for setting and re-setting umask.
 *
 * Create an object of this class to set the umask,
 * and the umask is reset to its original value when
 * the object goes out of scope.
 */
class DLLEXPORT UMask
{
public:
    UMask( mode_t u );
    ~UMask();

    /** @brief a "safe" umask
     *
     * This umask will switch off group- and other- permissions for
     * files, so that the file cannot be read, written, or executed
     * except by the owner.
     */
    static constexpr mode_t Safe = 077;  // octal!
private:
    mode_t m_mode;
};
}  // namespace CalamaresUtils

#endif

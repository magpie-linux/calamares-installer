/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2014, Teo Mrnjavac <teo@kde.org>
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

#include "ProcessJobModule.h"

#include "ProcessJob.h"

#include <QDir>

namespace Calamares
{


Module::Type
ProcessJobModule::type() const
{
    return Module::Type::Job;
}


Module::Interface
ProcessJobModule::interface() const
{
    return Module::Interface::Process;
}


void
ProcessJobModule::loadSelf()
{
    if ( m_loaded )
    {
        return;
    }

    m_job = job_ptr( new ProcessJob( m_command, m_workingPath, m_runInChroot, m_secondsTimeout ) );
    m_loaded = true;
}


JobList
ProcessJobModule::jobs() const
{
    return JobList() << m_job;
}


void
ProcessJobModule::initFrom( const QVariantMap& moduleDescriptor )
{
    Module::initFrom( moduleDescriptor );
    QDir directory( location() );
    m_workingPath = directory.absolutePath();

    if ( !moduleDescriptor.value( "command" ).toString().isEmpty() )
    {
        m_command = moduleDescriptor.value( "command" ).toString();
    }

    m_secondsTimeout = std::chrono::seconds( 30 );
    if ( moduleDescriptor.contains( "timeout" ) && !moduleDescriptor.value( "timeout" ).isNull() )
    {
        int sec = moduleDescriptor.value( "timeout" ).toInt();
        if ( sec < 0 )
            sec = 0;
        m_secondsTimeout = std::chrono::seconds( sec );
    }

    m_runInChroot = false;
    if ( moduleDescriptor.contains( "chroot" ) && !moduleDescriptor.value( "chroot" ).isNull() )
    {
        m_runInChroot = moduleDescriptor.value( "chroot" ).toBool();
    }
}


ProcessJobModule::ProcessJobModule()
    : Module()
    , m_secondsTimeout( std::chrono::seconds( 30 ) )
    , m_runInChroot( false )
{
}


ProcessJobModule::~ProcessJobModule() {}


}  // namespace Calamares

# libcalamaresui is the GUI part of Calamares, which includes handling
# view modules, view steps, widgets, and branding.

# The UI libs use the non-UI library
include_directories( ${CMAKE_SOURCE_DIR}/src/libcalamares ${CMAKE_BINARY_DIR}/src/libcalamares )

set( calamaresui_SOURCES
    modulesystem/CppJobModule.cpp
    modulesystem/Module.cpp
    modulesystem/ModuleManager.cpp
    modulesystem/ProcessJobModule.cpp
    modulesystem/Requirement.cpp
    modulesystem/RequirementsChecker.cpp
    modulesystem/ViewModule.cpp

    utils/CalamaresUtilsGui.cpp
    utils/DebugWindow.cpp
    utils/ImageRegistry.cpp
    utils/Paste.cpp

    utils/qjsonmodel.cpp
    utils/qjsonitem.cpp

    viewpages/BlankViewStep.cpp
    viewpages/ViewStep.cpp

    widgets/ClickableLabel.cpp
    widgets/FixedAspectRatioLabel.cpp
    widgets/waitingspinnerwidget.cpp
    widgets/WaitingWidget.cpp

    ExecutionViewStep.cpp
    Branding.cpp
    ViewManager.cpp
)

# Don't warn about third-party sources
mark_thirdparty_code(
    utils/ImageRegistry.cpp
    utils/qjsonitem.cpp
    utils/qjsonmodel.cpp
    widgets/waitingspinnerwidget.cpp
)

set( calamaresui_UI
    utils/DebugWindow.ui
)

if( WITH_PYTHON )
    list( APPEND calamaresui_SOURCES
        modulesystem/PythonJobModule.cpp
    )
endif()

if( WITH_PYTHONQT )
    include_directories(${PYTHON_INCLUDE_DIRS})
    # *_DIRS because we also use extensions
    include_directories(${PYTHONQT_INCLUDE_DIRS})

    list( APPEND calamaresui_SOURCES
        modulesystem/PythonQtViewModule.cpp
        utils/PythonQtUtils.cpp
        viewpages/PythonQtJob.cpp
        viewpages/PythonQtViewStep.cpp
        viewpages/PythonQtGlobalStorageWrapper.cpp
        viewpages/PythonQtUtilsWrapper.cpp
    )
    set( OPTIONAL_PYTHON_LIBRARIES
        ${PYTHON_LIBRARIES}
        ${PYTHONQT_LIBRARIES}
    )
endif()

calamares_add_library( calamaresui
    SOURCES ${calamaresui_SOURCES}
    UI ${calamaresui_UI}
    EXPORT_MACRO UIDLLEXPORT_PRO
    LINK_PRIVATE_LIBRARIES
        ${OPTIONAL_PYTHON_LIBRARIES}
    LINK_LIBRARIES
        Qt5::Svg
        Qt5::QuickWidgets
    RESOURCES libcalamaresui.qrc
    EXPORT CalamaresLibraryDepends
    VERSION ${CALAMARES_VERSION_SHORT}
)

find_package( KF5CoreAddons 5.58 QUIET )  # If it's really new
if ( KF5CoreAddons_FOUND )
    target_compile_definitions( calamaresui PRIVATE WITH_KOSRelease )
    target_link_libraries( calamaresui PRIVATE KF5::CoreAddons )
endif()

calamares_add_plugin( initcpio
    TYPE job
    EXPORT_MACRO PLUGINDLLEXPORT_PRO
    SOURCES
        InitcpioJob.cpp
    LINK_PRIVATE_LIBRARIES
        calamares
    SHARED_LIB
)

if( ECM_FOUND AND BUILD_TESTING )
    ecm_add_test(
            Tests.cpp
        TEST_NAME
            initcpiotest
        LINK_LIBRARIES
            ${CALAMARES_LIBRARIES}
            calamares
            calamares_job_initcpio # From above
            ${YAMLCPP_LIBRARY}
            Qt5::Core
            Qt5::Test
    )
    set_target_properties( initcpiotest PROPERTIES AUTOMOC TRUE )
    target_include_directories( initcpiotest PRIVATE /usr/local/include )
endif()

<?xml version="1.0" ?><!DOCTYPE TS><TS language="bg" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="71"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>&lt;strong&gt;Среда за начално зареждане&lt;/strong&gt; на тази система.&lt;br&gt;&lt;br&gt;Старите x86 системи поддържат само &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Модерните системи обикновено използват &lt;strong&gt;EFI&lt;/strong&gt;, но може също така да използват BIOS, ако са стартирани в режим на съвместимост.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="81"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Тази система беше стартирана с &lt;strong&gt;EFI&lt;/strong&gt; среда за начално зареждане.&lt;br&gt;&lt;br&gt;За да се настрои стартирането от EFI, инсталаторът трябва да разположи програма за начално зареждане като &lt;strong&gt;GRUB&lt;/strong&gt; или &lt;strong&gt;systemd-boot&lt;/strong&gt; на &lt;strong&gt;EFI Системен Дял&lt;/strong&gt;. Това се прави автоматично, освен ако не се избере ръчно поделяне, в такъв случай вие трябва да свършите тази работа.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="93"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Тази система беше стартирана с &lt;strong&gt;BIOS&lt;/strong&gt; среда за начално зареждане.&lt;br&gt;&lt;br&gt;За да се настрои стартирането от BIOS, инсталаторът трябва да разположи програма за начално зареждане като &lt;strong&gt;GRUB&lt;/strong&gt; в началото на дяла или на &lt;strong&gt;Сектора за Начално Зареждане&lt;/strong&gt; близо до началото на таблицата на дяловете (предпочитано). Това се прави автоматично, освен ако не се избере ръчно поделяне, в такъв случай вие трябва да свършите тази работа.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="70"/>
        <source>Master Boot Record of %1</source>
        <translation>Сектор за начално зареждане на %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="104"/>
        <source>Boot Partition</source>
        <translation>Дял за начално зареждане</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="109"/>
        <source>System Partition</source>
        <translation>Системен дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="139"/>
        <source>Do not install a boot loader</source>
        <translation>Не инсталирай програма за начално зареждане</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="156"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>Calamares::BlankViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="69"/>
        <source>Blank Page</source>
        <translation>Празна страница</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>Глобално съхранение</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>Опашка от задачи</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Модули</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>Вид:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="64"/>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>няма</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Интерфейс:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Инструменти</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="106"/>
        <source>Reload Stylesheet</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="113"/>
        <source>Widget Tree</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="233"/>
        <source>Debug information</source>
        <translation>Информация за отстраняване на грешки</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="121"/>
        <source>Set up</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="122"/>
        <source>Install</source>
        <translation>Инсталирай</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="39"/>
        <source>Job failed (%1)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="39"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="102"/>
        <source>Done</source>
        <translation>Готово</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="27"/>
        <source>Example job (%1)</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="59"/>
        <source>Running command %1 %2</source>
        <translation>Изпълняване на команда %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="273"/>
        <source>Running %1 operation.</source>
        <translation>Изпълнение на %1 операция.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="288"/>
        <source>Bad working directory path</source>
        <translation>Невалиден път на работната директория</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="289"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Работна директория %1 за python задача %2 не се чете.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="299"/>
        <source>Bad main script file</source>
        <translation>Невалиден файл на главен скрипт</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="300"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Файлът на главен скрипт %1 за python задача %2 не се чете.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="377"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Boost.Python грешка в задача &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="167"/>
        <source>Waiting for %n module(s).</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="168"/>
        <source>(%n second(s))</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="173"/>
        <source>System-requirements checking is complete.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="377"/>
        <source>&amp;Back</source>
        <translation>&amp;Назад</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="372"/>
        <source>&amp;Next</source>
        <translation>&amp;Напред</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="394"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отказ</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="361"/>
        <source>Cancel setup without changing the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="362"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Отказ от инсталацията без промяна на системата.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="197"/>
        <source>Setup Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="222"/>
        <source>Calamares Initialization Failed</source>
        <translation>Инициализацията на Calamares се провали</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="223"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 не може да се инсталира. Calamares не можа да зареди всичките конфигурирани модули. Това е проблем с начина, по който Calamares е използван от дистрибуцията.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="228"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>&lt;br/&gt;Следните модули не могат да се заредят:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="290"/>
        <source>Continue with installation?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="292"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="299"/>
        <source>&amp;Set up now</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="355"/>
        <source>&amp;Set up</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="356"/>
        <source>&amp;Install</source>
        <translation>&amp;Инсталирай</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="358"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="441"/>
        <source>Cancel setup?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="442"/>
        <source>Cancel installation?</source>
        <translation>Отмяна на инсталацията?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="444"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="446"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Наистина ли искате да отмените текущият процес на инсталиране?
Инсталатора ще прекъсне и всичките промени ще бъдат загубени.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="454"/>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="455"/>
        <source>&amp;No</source>
        <translation>&amp;Не</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="204"/>
        <source>&amp;Close</source>
        <translation>&amp;Затвори</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="289"/>
        <source>Continue with setup?</source>
        <translation>Продължаване?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="295"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Инсталатора на %1 ще направи промени по вашия диск за да инсталира %2. &lt;br&gt;&lt;strong&gt;Промените ще бъдат окончателни.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="300"/>
        <source>&amp;Install now</source>
        <translation>&amp;Инсталирай сега</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="307"/>
        <source>Go &amp;back</source>
        <translation>В&amp;ръщане</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="382"/>
        <source>&amp;Done</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="359"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>Инсталацията е завършена. Затворете инсталаторa.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="201"/>
        <source>Error</source>
        <translation>Грешка</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="198"/>
        <source>Installation Failed</source>
        <translation>Неуспешна инсталация</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="270"/>
        <source>Unknown exception type</source>
        <translation>Неизвестен тип изключение</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="284"/>
        <source>unparseable Python error</source>
        <translation>неанализируема грешка на Python</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="324"/>
        <source>unparseable Python traceback</source>
        <translation>неанализируемо проследяване на Python</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="329"/>
        <source>Unfetchable Python error.</source>
        <translation>Недостъпна грешка на Python.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="72"/>
        <source>%1 Setup Program</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="73"/>
        <source>%1 Installer</source>
        <translation>%1 Инсталатор</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="142"/>
        <source>Show debug information</source>
        <translation>Покажи информация за отстраняване на грешки</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="45"/>
        <source>Gathering system information...</source>
        <translation>Събиране на системна информация...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="154"/>
        <source>After:</source>
        <translation>След:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="330"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
        <translation>&lt;strong&gt;Самостоятелно поделяне&lt;/strong&gt;&lt;br/&gt;Можете да създадете или преоразмерите дяловете сами.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1024"/>
        <source>Boot loader location:</source>
        <translation>Локация на програмата за начално зареждане:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="152"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Изберете ус&amp;тройство за съхранение:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="153"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="951"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="996"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1082"/>
        <source>Current:</source>
        <translation>Сегашен:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="827"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Използване на %1 като домашен дял за %2</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="952"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Изберете дял за смаляване, после влачете долната лента за преоразмеряване&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="967"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1073"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Изберете дял за инсталацията&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1129"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>EFI системен дял не е намерен. Моля, опитайте пак като използвате ръчно поделяне за %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1138"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>EFI системен дял в %1 ще бъде използван за стартиране на %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1146"/>
        <source>EFI system partition:</source>
        <translation>EFI системен дял:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1264"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Това устройство за съхранение няма инсталирана операционна система. Какво ще правите?&lt;br/&gt;Ще може да прегледате и потвърдите избора си, преди да се направят промени по устройството за съхранение.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1269"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1307"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1330"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1356"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Изтриване на диска&lt;/strong&gt;&lt;br/&gt;Това ще &lt;font color=&quot;red&quot;&gt;изтрие&lt;/font&gt; всички данни върху устройството за съхранение.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1297"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Това устройство за съхранение има инсталиран %1. Какво ще правите?&lt;br/&gt;Ще може да прегледате и потвърдите избора си, преди да се направят промени по устройството за съхранение.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1501"/>
        <source>No Swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1506"/>
        <source>Reuse Swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1509"/>
        <source>Swap (no Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1512"/>
        <source>Swap (with Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1515"/>
        <source>Swap to file</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1273"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1303"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1326"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1352"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Инсталирайте покрай&lt;/strong&gt;&lt;br/&gt;Инсталатора ще раздроби дяла за да направи място за %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1277"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1312"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1334"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1360"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Замени дял&lt;/strong&gt;&lt;br/&gt;Заменя този дял с %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1321"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Това устройство за съхранение има инсталирана операционна система. Какво ще правите?&lt;br/&gt;Ще може да прегледате и потвърдите избора си, преди да се направят промени по устройството за съхранение.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1347"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Това устройство за съхранение има инсталирани операционни системи. Какво ще правите?&lt;br/&gt;Ще може да прегледате и потвърдите избора си, преди да се направят промени по устройството за съхранение.</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="47"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Разчисти монтиранията за операциите на подялбата на %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="55"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Разчистване на монтиранията за операциите на подялбата на %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="192"/>
        <source>Cleared all mounts for %1</source>
        <translation>Разчистени всички монтирания за %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="42"/>
        <source>Clear all temporary mounts.</source>
        <translation>Разчисти всички временни монтирания.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="49"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Разчистване на всички временни монтирания.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="60"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Не може да се вземе лист от временни монтирания.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="99"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Разчистени всички временни монтирания.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="128"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="139"/>
        <source>Could not run command.</source>
        <translation>Командата не може да се изпълни.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="129"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation>Командата се изпълнява в средата на хоста и трябва да установи местоположението на основния дял, но rootMountPoint не е определен.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="140"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation>Командата трябва да установи потребителското име на профила, но такова не е определено.</translation>
    </message>
</context>
<context>
    <name>ContextualProcessJob</name>
    <message>
        <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="117"/>
        <source>Contextual Processes Job</source>
        <translation>Задача с контекстуални процеси</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Създай дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>&amp;Тип на дяла:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Основен</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>Р&amp;азширен</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>Фа&amp;йлова система:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>LVM LV name</source>
        <translation>LVM LV име</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="188"/>
        <source>Flags:</source>
        <translation>Флагове:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="161"/>
        <source>&amp;Mount Point:</source>
        <translation>Точка на &amp;монтиране:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>Раз&amp;мер:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="72"/>
        <source>En&amp;crypt</source>
        <translation>Ши&amp;фриране</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="151"/>
        <source>Logical</source>
        <translation>Логическа</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="156"/>
        <source>Primary</source>
        <translation>Главна</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="173"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="262"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Точката за монтиране вече се използва. Моля изберете друга.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="44"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="55"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="67"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Създаване на нов %1  дял върху %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="79"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Инсталатора не успя да създаде дял върху диск &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Създай таблица на дяловете</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Създаването на нова таблица на дяловете ще изтрие всички съществуващи данни на диска.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Какъв тип таблица на дяловете искате да създадете?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Сектор за начално зареждане (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID Таблица на дяловете (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Създай нова %1 таблица на дяловете върху %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="54"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Създай нова &lt;strong&gt;%1&lt;/strong&gt; таблица на дяловете върху &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="64"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Създаване на нова %1 таблица на дяловете върху %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="82"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Инсталатора не можа да създаде таблица на дяловете върху  %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="51"/>
        <source>Create user %1</source>
        <translation>Създай потребител %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="58"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Създай потребител &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="65"/>
        <source>Creating user %1.</source>
        <translation>Създаване на потребител %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="81"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Директорията sudoers е незаписваема.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="85"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Не може да се създаде sudoers файл за записване.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="93"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Не може да се изпълни chmod върху sudoers файла.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="99"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Не може да се отвори файла на групите за четене.</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="37"/>
        <source>Create Volume Group</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="45"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="52"/>
        <source>Creating new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="65"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>Deactivate volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="41"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="40"/>
        <source>Delete partition %1.</source>
        <translation>Изтрий дял %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="48"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Изтриване на дял &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>Deleting partition %1.</source>
        <translation>Изтриване на дял %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="68"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Инсталатора не успя да изтрие дял %1.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="151"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Типа на &lt;strong&gt;таблицата на дяловете&lt;/strong&gt; на избраното устройство за съхранение.&lt;br&gt;&lt;br&gt;Единствения начин да се промени е като се изчисти и пресъздаде таблицата на дяловете, като по този начин всички данни върху устройството ще бъдат унищожени.&lt;br&gt;Инсталатора ще запази сегашната таблица на дяловете, освен ако не изберете обратното.&lt;br&gt;Ако не сте сигурни - за модерни системи се препоръчва GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="108"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Устройството има &lt;strong&gt;%1&lt;/strong&gt; таблица на дяловете.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="115"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Това е &lt;strong&gt;loop&lt;/strong&gt; устройство.&lt;br&gt;&lt;br&gt;Представлява псевдо-устройство, без таблица на дяловете, което прави файловете достъпни като блок устройства. Обикновено съдържа само една файлова система.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="122"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Инсталатора &lt;strong&gt;не може да открие таблица на дяловете&lt;/strong&gt; на избраното устройство за съхранение.&lt;br&gt;&lt;br&gt;Таблицата на дяловете липсва, повредена е или е от неизвестен тип.&lt;br&gt;Инсталатора може да създаде нова таблица на дяловете автоматично или ръчно, чрез програмата за подялба.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="132"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Това е препоръчаният тип на таблицата на дяловете за модерни системи, които стартират от &lt;strong&gt;EFI&lt;/strong&gt; среда за начално зареждане.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="138"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Тази таблица на дяловете е препоръчителна само за стари системи, които стартират с &lt;strong&gt;BIOS&lt;/strong&gt; среда за начално зареждане. GPT е препоръчителна в повечето случаи.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Внимание:&lt;/strong&gt; MBR таблица на дяловете е остарял стандарт от времето на MS-DOS.&lt;br&gt;Само 4 &lt;em&gt;главни&lt;/em&gt; дяла могат да бъдат създадени и от тях само един може да е &lt;em&gt;разширен&lt;/em&gt; дял, който може да съдържа много &lt;em&gt;логически&lt;/em&gt; дялове.</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="92"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="103"/>
        <source>%1 - (%2)</source>
        <extracomment>device[name] - (device-node[name])</extracomment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DracutLuksCfgJob</name>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="131"/>
        <source>Write LUKS configuration for Dracut to %1</source>
        <translation>Запиши LUKS конфигурация за Dracut на %1</translation>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="133"/>
        <source>Skip writing LUKS configuration for Dracut: &quot;/&quot; partition is not encrypted</source>
        <translation>Пропусни записването на LUKS конфигурация за Dracut: &quot;/&quot; дял не е шифриран</translation>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="149"/>
        <source>Failed to open %1</source>
        <translation>Неуспешно отваряне на %1</translation>
    </message>
</context>
<context>
    <name>DummyCppJob</name>
    <message>
        <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="47"/>
        <source>Dummy C++ Job</source>
        <translation>Фиктивна С++ задача</translation>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="20"/>
        <source>Edit Existing Partition</source>
        <translation>Редактирай съществуващ дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Съдържание:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Запази</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Форматирай</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Предупреждение: Форматирането на дялът ще изтрие всички съществуващи данни.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Точка на монтиране:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Раз&amp;мер:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="136"/>
        <source>Fi&amp;le System:</source>
        <translation>Фа&amp;йлова система:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="149"/>
        <source>Flags:</source>
        <translation>Флагове:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="269"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Точката за монтиране вече се използва. Моля изберете друга.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>Крип&amp;тиране на системата</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Парола</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Потвърди паролата</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="151"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Моля, въведете еднаква парола в двете полета.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="130"/>
        <source>Set partition information</source>
        <translation>Постави информация за дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="153"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Инсталирай %1 на &lt;strong&gt;нов&lt;/strong&gt; %2 системен дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="157"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Създай &lt;strong&gt;нов&lt;/strong&gt; %2 дял със точка на монтиране &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="165"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Инсталирай %2 на %3 системен дял &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Създай %3 дял &lt;strong&gt;%1&lt;/strong&gt; с точка на монтиране &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="182"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Инсталиране на зареждач върху &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="192"/>
        <source>Setting up mount points.</source>
        <translation>Настройка на точките за монтиране.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="95"/>
        <source>&lt;Restart checkbox tooltip&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="98"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Рестартирай сега</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="54"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="58"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="66"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Завършено.&lt;/h1&gt;&lt;br/&gt;%1 беше инсталирана на вашият компютър.&lt;br/&gt;Вече можете да рестартирате в новата си система или да продължите да използвате %2 Живата среда.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="133"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="139"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;Инсталацията е неуспешна&lt;/h1&gt;&lt;br/&gt;%1 не е инсталиран на Вашия компютър.&lt;br/&gt;Съобщението с грешката е: %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="78"/>
        <source>Finish</source>
        <translation>Завърши</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="132"/>
        <source>Setup Complete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="133"/>
        <source>Installation Complete</source>
        <translation>Инсталацията е завършена</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="135"/>
        <source>The setup of %1 is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="136"/>
        <source>The installation of %1 is complete.</source>
        <translation>Инсталацията на %1 е завършена.</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="41"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="52"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Форматирай дял %1 с файлова система %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="77"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Инсталатора не успя да форматира дял %1 на диск &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="108"/>
        <source>has at least %1 GiB available drive space</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="109"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="116"/>
        <source>has at least %1 GiB working memory</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="117"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="124"/>
        <source>is plugged in to a power source</source>
        <translation>е включен към източник на захранване</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="125"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Системата не е включена към източник на захранване.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="132"/>
        <source>is connected to the Internet</source>
        <translation>е свързан към интернет</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="133"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Системата не е свързана с интернет.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="142"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="143"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>Инсталаторът не е стартиран с права на администратор.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="152"/>
        <source>The screen is too small to display the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="153"/>
        <source>The screen is too small to display the installer.</source>
        <translation>Екранът е твърде малък за инсталатора.</translation>
    </message>
</context>
<context>
    <name>IDJob</name>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="38"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="47"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="67"/>
        <source>OEM Batch Identifier</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="48"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="68"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="40"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>InitramfsJob</name>
    <message>
        <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="37"/>
        <source>Creating initramfs.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>InteractiveTerminalPage</name>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="53"/>
        <source>Konsole not installed</source>
        <translation>Konsole не е инсталиран</translation>
    </message>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="54"/>
        <source>Please install KDE Konsole and try again!</source>
        <translation>Моля, инсталирайте KDE Konsole и опитайте отново!</translation>
    </message>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="116"/>
        <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
        <translation>Изпълняване на скрипт: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
</context>
<context>
    <name>InteractiveTerminalViewStep</name>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="47"/>
        <source>Script</source>
        <translation>Скрипт</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="219"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Постави модел на клавиатурата на %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="223"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Постави оформлението на клавиатурата на %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Клавиатура</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="34"/>
        <source>System locale setting</source>
        <translation>Настройка на локацията на системата</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="41"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Локацията на системата засяга езика и символите зададени за някои елементи на командния ред.&lt;br/&gt;Текущата настройка е &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="66"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отказ</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="67"/>
        <source>&amp;OK</source>
        <translation>&amp;ОК</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="123"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Приемам лицензионните условия.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="146"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;Лицензионно Споразумение&lt;/h1&gt;Тази процедура ще инсталира несвободен софтуер, който е обект на лицензионни условия.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Моля погледнете Лицензионните Условия за Крайния Потребител (ЛУКП).&lt;br/&gt;Ако не сте съгласни с условията, процедурата не може да продължи.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="155"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
        <translation>&lt;h1&gt;Лицензионно Споразумение&lt;/h1&gt;Тази процедура може да инсталира несвободен софтуер, който е обект на лицензионни условия, за да предостави допълнителни функции и да подобри работата на потребителя.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="160"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Моля погледнете Лицензионните Условия за Крайния Потребител (ЛУКП).&lt;br/&gt;Ако не сте съгласни с условията, несвободния софтуер няма да бъде инсталиран и ще бъдат използвани безплатни алтернативи.</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="51"/>
        <source>License</source>
        <translation>Лиценз</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 драйвър&lt;/strong&gt;&lt;br/&gt;от %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="129"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 графичен драйвър&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;от %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="135"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 плъгин за браузър&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;от %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="141"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 кодек&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;от %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="147"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 пакет&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;от %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="153"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;от %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="191"/>
        <source>Shows the complete license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="192"/>
        <source>Hide license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="196"/>
        <source>Show license agreement</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="197"/>
        <source>Hide license agreement</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="201"/>
        <source>Opens the license agreement in a browser window.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="202"/>
        <source>&lt;a href=&quot;%1&quot;&gt;View license agreement&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="396"/>
        <source>The system language will be set to %1.</source>
        <translation>Системният език ще бъде %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="397"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>Форматът на цифрите и датата ще бъде %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="219"/>
        <source>Region:</source>
        <translation>Регион:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="220"/>
        <source>Zone:</source>
        <translation>Зона:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="224"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="225"/>
        <source>&amp;Change...</source>
        <translation>&amp;Промени...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="404"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Постави часовата зона на %1/%2.&lt;br/&gt;</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="55"/>
        <source>Loading location data...</source>
        <translation>Зареждане на данните за местоположение</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="132"/>
        <source>Location</source>
        <translation>Местоположение</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="39"/>
        <source>Configuring LUKS key file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="156"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="164"/>
        <source>No partitions are defined.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="192"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="199"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="207"/>
        <source>Encrypted rootfs setup error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="193"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="200"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="208"/>
        <source>Could configure LUKS key file on partition %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>NetInstallPage</name>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="62"/>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="63"/>
        <source>Description</source>
        <translation>Описание</translation>
    </message>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="84"/>
        <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
        <translation>Мрежова инсталация. (Изключена: Списъкът с пакети не може да бъде извлечен, проверете Вашата Интернет връзка)</translation>
    </message>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="94"/>
        <source>Network Installation. (Disabled: Received invalid groups data)</source>
        <translation>Мрежова инсталация. (Изключена: Получени са данни за невалидни групи)</translation>
    </message>
</context>
<context>
    <name>NetInstallViewStep</name>
    <message>
        <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
        <source>Package selection</source>
        <translation>Избор на пакети</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="28"/>
        <source>Ba&amp;tch:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="38"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="48"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="121"/>
        <source>OEM Configuration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="126"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="63"/>
        <source>Password is too short</source>
        <translation>Паролата е твърде кратка</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="85"/>
        <source>Password is too long</source>
        <translation>Паролата е твърде дълга</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="169"/>
        <source>Password is too weak</source>
        <translation>Паролата е твърде слаба</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="176"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Грешка при разпределяне на паметта по време на настройването на &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="180"/>
        <source>Memory allocation error</source>
        <translation>Грешка при разпределяне на паметта</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="182"/>
        <source>The password is the same as the old one</source>
        <translation>Паролата съвпада с предишната</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="184"/>
        <source>The password is a palindrome</source>
        <translation>Паролата е палиндром</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="186"/>
        <source>The password differs with case changes only</source>
        <translation>Паролата се различава само със смяна на главни и малки букви</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>The password is too similar to the old one</source>
        <translation>Паролата е твърде сходна с предишната</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="190"/>
        <source>The password contains the user name in some form</source>
        <translation>Паролата съдържа потребителското име под някаква форма</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="192"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>Паролата съдържа думи от истинското име на потребителя под някаква форма</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="194"/>
        <source>The password contains forbidden words in some form</source>
        <translation>Паролата съдържа забранени думи под някаква форма</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="197"/>
        <source>The password contains less than %1 digits</source>
        <translation>Паролата съдържа по-малко от %1 цифри</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="198"/>
        <source>The password contains too few digits</source>
        <translation>Паролата съдържа твърде малко цифри</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password contains less than %1 uppercase letters</source>
        <translation>Паролата съдържа по-малко от %1 главни букви</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
        <source>The password contains too few uppercase letters</source>
        <translation>Паролата съдържа твърде малко главни букви</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password contains less than %1 lowercase letters</source>
        <translation>Паролата съдържа по-малко от %1 малки букви</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
        <source>The password contains too few lowercase letters</source>
        <translation>Паролата съдържа твърде малко малки букви</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains less than %1 non-alphanumeric characters</source>
        <translation>Паролата съдържа по-малко от %1 знаци, които не са букви или цифри</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>Паролата съдържа твърде малко знаци, които не са букви или цифри</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
        <source>The password is shorter than %1 characters</source>
        <translation>Паролата е по-малка от %1 знаци</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password is too short</source>
        <translation>Паролата е твърде кратка</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="216"/>
        <source>The password is just rotated old one</source>
        <translation>Паролата е обърнат вариант на старата</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
        <source>The password contains less than %1 character classes</source>
        <translation>Паролата съдържа по-малко от %1 видове знаци</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="220"/>
        <source>The password does not contain enough character classes</source>
        <translation>Паролата не съдържа достатъчно видове знаци</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="223"/>
        <source>The password contains more than %1 same characters consecutively</source>
        <translation>Паролата съдържа повече от %1 еднакви знаци последователно</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="224"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>Паролата съдържа твърде много еднакви знаци последователно</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="227"/>
        <source>The password contains more than %1 characters of the same class consecutively</source>
        <translation>Паролата съдържа повече от %1 еднакви видове знаци последователно</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>Паролата съдържа твърде много еднакви видове знаци последователно</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="231"/>
        <source>The password contains monotonic sequence longer than %1 characters</source>
        <translation>Паролата съдържа монотонна последователност, по-дълга от %1 знаци</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>Паролата съдържа твърде дълга монотонна последователност от знаци</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="234"/>
        <source>No password supplied</source>
        <translation>Липсва парола</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="236"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Получаването на произволни числа от RNG устройството е неуспешно</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="238"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>Генерирането на парола е неуспешно - необходимата ентропия е твърде ниска за настройки</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>Паролата не издържа проверката на речника - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="245"/>
        <source>The password fails the dictionary check</source>
        <translation>Паролата не издържа проверката на речника</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>Unknown setting - %1</source>
        <translation>Неизвестна настройка - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="253"/>
        <source>Unknown setting</source>
        <translation>Неизвестна настройка</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="257"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Невалидна числена стойност на настройката - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="261"/>
        <source>Bad integer value</source>
        <translation>Невалидна числена стойност на настройката</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>Setting %1 is not of integer type</source>
        <translation>Настройката %1 не е от числов вид</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>Setting is not of integer type</source>
        <translation>Настройката не е от числов вид</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="273"/>
        <source>Setting %1 is not of string type</source>
        <translation>Настройката %1 не е от текстов вид</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="277"/>
        <source>Setting is not of string type</source>
        <translation>Настройката не е от текстов вид</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="279"/>
        <source>Opening the configuration file failed</source>
        <translation>Отварянето на файла с конфигурацията е неуспешно</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="281"/>
        <source>The configuration file is malformed</source>
        <translation>Файлът с конфигурацията е деформиран</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="283"/>
        <source>Fatal failure</source>
        <translation>Фатална повреда</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="285"/>
        <source>Unknown error</source>
        <translation>Неизвестна грешка</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Модел на клавиатура:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Пишете тук за да тествате вашата клавиатура</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Какво е вашето име?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>Какво име искате да използвате за влизане?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Изберете парола за да държите вашият акаунт в безопасност.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Внесете същата парола два пъти, за да може да бъде проверена за правописни грешки. Добра парола ще съдържа смесица от букви, цифри и пунктуационни знаци, трябва да бъде поне с осем знака и да бъде променяна често.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>Какво е името на този компютър?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Това име ще бъде използвано ако направите компютъра видим за други при мрежа.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="466"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Влизайте автоматично, без питане за паролата.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="473"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Използвайте същата парола за администраторския акаунт.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="496"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Изберете парола за администраторския акаунт.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="601"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Внесете същата парола два пъти, за да може да бъде проверена за правописни грешки.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="197"/>
        <source>Root</source>
        <translation>Основен</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="200"/>
        <source>Home</source>
        <translation>Домашен</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="202"/>
        <source>Boot</source>
        <translation>Зареждане</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>EFI system</source>
        <translation>EFI система</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="209"/>
        <source>New partition for %1</source>
        <translation>Нов дял за %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition</source>
        <translation>Нов дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="230"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1 %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="144"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="176"/>
        <source>Free Space</source>
        <translation>Свободно пространство</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="148"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="180"/>
        <source>New partition</source>
        <translation>Нов дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="264"/>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="266"/>
        <source>File System</source>
        <translation>Файлова система</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="268"/>
        <source>Mount Point</source>
        <translation>Точка на монтиране</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="270"/>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Ус&amp;тройство за съхранение&quot;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Възвърни всички промени</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Нова &amp;таблица на дяловете</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>Cre&amp;ate</source>
        <translation>Съз&amp;дай</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>&amp;Редактирай</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>&amp;Изтрий</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="132"/>
        <source>New Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="139"/>
        <source>Resize Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="146"/>
        <source>Deactivate Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="153"/>
        <source>Remove Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="180"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="209"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Сигурни ли сте че искате да създадете нова таблица на дяловете върху %1?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="238"/>
        <source>Can not create new partition</source>
        <translation>Не може да се създаде нов дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="239"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>Таблицата на дяловете на %1 вече има %2 главни дялове, повече не може да се добавят. Моля, премахнете един главен дял и добавете разширен дял, на негово място.</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="78"/>
        <source>Gathering system information...</source>
        <translation>Събиране на системна информация...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="130"/>
        <source>Partitions</source>
        <translation>Дялове</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="167"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Инсталирай %1 &lt;strong&gt;заедно&lt;/strong&gt; с друга операционна система.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Изтрий&lt;/strong&gt; диска и инсталирай %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="175"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Замени&lt;/strong&gt; дял с %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="180"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>&lt;strong&gt;Ръчно&lt;/strong&gt; поделяне.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Инсталирай %1 &lt;strong&gt;заедно&lt;/strong&gt; с друга операционна система на диск &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="199"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Изтрий&lt;/strong&gt; диск &lt;strong&gt;%2&lt;/strong&gt; (%3) и инсталирай %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="205"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Замени&lt;/strong&gt; дял на диск &lt;strong&gt;%2&lt;/strong&gt; (%3) с %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="212"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;Ръчно&lt;/strong&gt; поделяне на диск &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="220"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Диск &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="248"/>
        <source>Current:</source>
        <translation>Сегашен:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="265"/>
        <source>After:</source>
        <translation>След:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="415"/>
        <source>No EFI system partition configured</source>
        <translation>Няма конфигуриран EFI системен дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="416"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>EFI системен дял е нужен за стартиране на %1.&lt;br/&gt;&lt;br/&gt;За настройка на EFI системен дял се върнете назад и изберете или създайте FAT32 файлова система с включен &lt;strong&gt;esp&lt;/strong&gt; флаг и точка на монтиране &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;Може да продължите без EFI системен дял, но системата може да не успее да стартира.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="429"/>
        <source>EFI system partition flag not set</source>
        <translation>Не е зададен флаг на EFI системен дял</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="430"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>EFI системен дял е нужен за стартиране на %1.&lt;br/&gt;&lt;br/&gt;Дялът беше конфигуриран с точка на монтиране &lt;strong&gt;%2&lt;/strong&gt;, но неговия &lt;strong&gt;esp&lt;/strong&gt; флаг не е включен.&lt;br/&gt;За да включите флага се върнете назад и редактирайте дяла.&lt;br/&gt;&lt;br/&gt;Може да продължите без флага, но системата може да не успее да стартира.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="465"/>
        <source>Boot partition not encrypted</source>
        <translation>Липсва криптиране на дял за начално зареждане</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="466"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="650"/>
        <source>has at least one disk device available.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="651"/>
        <source>There are no partitons to install on.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PlasmaLnfJob</name>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="41"/>
        <source>Plasma Look-and-Feel Job</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="73"/>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="74"/>
        <source>Could not select KDE Plasma Look-and-Feel package</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PlasmaLnfPage</name>
    <message>
        <location filename="../src/modules/plasmalnf/page_plasmalnf.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="70"/>
        <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="76"/>
        <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PlasmaLnfViewStep</name>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="68"/>
        <source>Look-and-Feel</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="84"/>
        <source>Saving files for later ...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="122"/>
        <source>No files configured to save for later.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="176"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="382"/>
        <source>
There was no output from the command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="383"/>
        <source>
Output:
</source>
        <translation>
Резултат:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="386"/>
        <source>External command crashed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="387"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="392"/>
        <source>External command failed to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="393"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="397"/>
        <source>Internal error when starting command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="398"/>
        <source>Bad parameters for process job call.</source>
        <translation>Невалидни параметри за извикване на задача за процес.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="401"/>
        <source>External command failed to finish.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="402"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="408"/>
        <source>External command finished with errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="409"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="91"/>
        <source>Default Keyboard Model</source>
        <translation>Модел на клавиатура по подразбиране</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="133"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="168"/>
        <source>Default</source>
        <translation>По подразбиране</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="207"/>
        <source>unknown</source>
        <translation>неизвестна</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="209"/>
        <source>extended</source>
        <translation>разширена</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="211"/>
        <source>unformatted</source>
        <translation>неформатирана</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="213"/>
        <source>swap</source>
        <translation>swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="51"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Неразделено пространство или неизвестна таблица на дяловете</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="47"/>
        <source>(no mount point)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="65"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Label.cpp" line="46"/>
        <source>%1 (%2)</source>
        <extracomment>language[name] (country[name])</extracomment>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
        <source>Remove Volume Group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="41"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="135"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Изберете къде да инсталирате %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Предупреждение: &lt;/font&gt;това ще изтрие всички файлове върху избраният дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>Избраният предмет не изглежда да е валиден дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 не може да бъде инсталиран на празно пространство. Моля изберете съществуващ дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="179"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 не може да бъде инсталиран върху разширен дял. Моля изберете съществуващ основен или логически дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="189"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 не може да бъде инсталиран върху този дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="195"/>
        <source>Data partition (%1)</source>
        <translation>Дял на данните (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="212"/>
        <source>Unknown system partition (%1)</source>
        <translation>Непознат системен дял (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="217"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 системен дял (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="228"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Дялът %1 е твърде малък за %2. Моля изберете дял с капацитет поне %3 ГБ.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;EFI системен дял не е намерен. Моля, опитайте пак като използвате ръчно поделяне за %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="262"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="279"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="303"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 ще бъде инсталиран върху %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Предупреждение: &lt;/font&gt;всички данни на дял %2 ще бъдат изгубени.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="271"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>EFI системен дял в %1 ще бъде използван за стартиране на %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="287"/>
        <source>EFI system partition:</source>
        <translation>EFI системен дял:</translation>
    </message>
</context>
<context>
    <name>ResizeFSJob</name>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="59"/>
        <source>Resize Filesystem Job</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="172"/>
        <source>Invalid configuration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="173"/>
        <source>The file-system resize job has an invalid configuration and will not run.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="187"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="197"/>
        <source>KPMCore not Available</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="188"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="198"/>
        <source>Calamares cannot start KPMCore for the file-system resize job.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="215"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="228"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="237"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="254"/>
        <source>Resize Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
        <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="208"/>
        <source>The device %1 could not be found in this system, and cannot be resized.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="216"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="229"/>
        <source>The filesystem %1 cannot be resized.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="217"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="230"/>
        <source>The device %1 cannot be resized.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="238"/>
        <source>The filesystem %1 must be resized, but cannot.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="239"/>
        <source>The device %1 must be resized, but cannot</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize partition %1.</source>
        <translation>Преоразмери дял %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="55"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="66"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="85"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Инсталатора не успя да преоразмери дял %1 върху диск &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="39"/>
        <source>Resize Volume Group</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="55"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="70"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResultsListWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="96"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="100"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Този компютър не отговаря на минималните изисквания за инсталиране %1.&lt;br/&gt;Инсталацията не може да продължи.
&lt;a href=&quot;#details&quot;&gt;Детайли...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="118"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="122"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Този компютър не отговаря на някои от препоръчителните изисквания за инсталиране %1.&lt;br/&gt;Инсталацията може да продължи, но някои свойства могат да бъдат недостъпни.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="160"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Тази програма ще ви зададе няколко въпроса и ще конфигурира %2 на вашия компютър.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="181"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>За най-добри резултати, моля бъдете сигурни че този компютър:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="209"/>
        <source>System requirements</source>
        <translation>Системни изисквания</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Scanning storage devices...</source>
        <translation>Сканиране на устройствата за съхранение</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="85"/>
        <source>Partitioning</source>
        <translation>Разделяне</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="38"/>
        <source>Set hostname %1</source>
        <translation>Поставете име на хоста %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="45"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Поставете име на хост &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="52"/>
        <source>Setting hostname %1.</source>
        <translation>Задаване името на хоста %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="62"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="69"/>
        <source>Internal Error</source>
        <translation>Вътрешна грешка</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="76"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="87"/>
        <source>Cannot write hostname to target system</source>
        <translation>Не може да се запише името на хоста на целевата система</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Постави модела на клавиатурата на %1, оформлението на %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Неуспешно записването на клавиатурна конфигурация за виртуалната конзола.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="322"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="326"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="332"/>
        <source>Failed to write to %1</source>
        <translation>Неуспешно записване върху %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Неуспешно записване на клавиатурна конфигурация за X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Неуспешно записване на клавиатурна конфигурация в съществуващата директория /etc/default.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on partition %1.</source>
        <translation>Задай флагове на дял %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="52"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="56"/>
        <source>Set flags on new partition.</source>
        <translation>Задай флагове на нов дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Изчисти флаговете на дял &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="85"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Изчисти флагове на нов дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="79"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Сложи флаг на дял &lt;strong&gt;%1&lt;/strong&gt; като &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Сложи флаг на новия дял като &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="103"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Изчистване на флаговете на дял &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="111"/>
        <source>Clearing flags on new partition.</source>
        <translation>Изчистване на флаговете на новия дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="115"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Задаване на флагове &lt;strong&gt;%2&lt;/strong&gt; на дял &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="127"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Задаване на флагове &lt;strong&gt;%1&lt;/strong&gt; на новия дял.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="144"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Инсталатора не успя да зададе флагове на дял %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="48"/>
        <source>Set password for user %1</source>
        <translation>Задай парола за потребител %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="55"/>
        <source>Setting password for user %1.</source>
        <translation>Задаване на парола за потребител %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="112"/>
        <source>Bad destination system path.</source>
        <translation>Лоша дестинация за системен път.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="113"/>
        <source>rootMountPoint is %1</source>
        <translation>rootMountPoint е %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="123"/>
        <source>Cannot disable root account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="124"/>
        <source>passwd terminated with error code %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="139"/>
        <source>Cannot set password for user %1.</source>
        <translation>Не може да се постави парола за потребител %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="141"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod е прекратен с грешка %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Постави часовата зона на %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Няма достъп до избрания път за часова зона.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Невалиден път: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>Не може да се зададе часова зона.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Неуспешно създаване на връзка: %1; име на връзка: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot set timezone,</source>
        <translation>Не може да се зададе часова зона,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="97"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Не може да се отвори /etc/timezone за записване</translation>
    </message>
</context>
<context>
    <name>ShellProcessJob</name>
    <message>
        <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="50"/>
        <source>Shell Processes Job</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SlideCounter</name>
    <message>
        <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="36"/>
        <source>%L1 / %L2</source>
        <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
        <translation>%L1 / %L2</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="57"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="60"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Това е преглед на промените, които ще се извършат, след като започнете процедурата по инсталиране.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Обобщение</translation>
    </message>
</context>
<context>
    <name>TrackingInstallJob</name>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="43"/>
        <source>Installation feedback</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="53"/>
        <source>Sending installation feedback.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="88"/>
        <source>Internal error in install-tracking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="89"/>
        <source>HTTP request timed out.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>TrackingMachineNeonJob</name>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="104"/>
        <source>Machine feedback</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="114"/>
        <source>Configuring machine feedback.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="133"/>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="136"/>
        <source>Error in machine feedback configuration.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="134"/>
        <source>Could not configure machine feedback correctly, script error %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="137"/>
        <source>Could not configure machine feedback correctly, Calamares error %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>TrackingPage</name>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="24"/>
        <source>Placeholder</source>
        <translation>Заместител</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="72"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By selecting this, you will send &lt;span style=&quot; font-weight:600;&quot;&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="271"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href=&quot;placeholder&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#2980b9;&quot;&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="44"/>
        <source>Install tracking helps %1 to see how many users they have, what hardware they install %1 to and (with the last two options below), get continuous information about preferred applications. To see what will be sent, please click the help icon next to each area.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="45"/>
        <source>By selecting this you will send information about your installation and hardware. This information will &lt;b&gt;only be sent once&lt;/b&gt; after the installation finishes.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="46"/>
        <source>By selecting this you will &lt;b&gt;periodically&lt;/b&gt; send information about your installation, hardware and applications, to %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="47"/>
        <source>By selecting this you will &lt;b&gt;regularly&lt;/b&gt; send information about your installation, hardware, applications and usage patterns, to %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>TrackingViewStep</name>
    <message>
        <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="61"/>
        <source>Feedback</source>
        <translation>Обратна връзка</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="120"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="126"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="317"/>
        <source>Your username is too long.</source>
        <translation>Вашето потребителско име е твърде дълго.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="323"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>Потребителското ви име съдържа непозволени символи! Само малки букви и числа са позволени.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="361"/>
        <source>Your hostname is too short.</source>
        <translation>Вашето име на хоста е твърде кратко.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="367"/>
        <source>Your hostname is too long.</source>
        <translation>Вашето име на хоста е твърде дълго.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="373"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>Вашето име на хоста съдържа непозволени символи! Само букви, цифри и тирета са позволени.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="401"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="445"/>
        <source>Your passwords do not match!</source>
        <translation>Паролите Ви не съвпадат!</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="54"/>
        <source>Users</source>
        <translation>Потребители</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="14"/>
        <source>Create Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="20"/>
        <source>List of Physical Volumes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="30"/>
        <source>Volume Group Name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="43"/>
        <source>Volume Group Type:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="56"/>
        <source>Physical Extent Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="66"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="82"/>
        <source>Total Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="102"/>
        <source>Used Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="122"/>
        <source>Total Sectors:</source>
        <translation>Общо сектори:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="142"/>
        <source>Quantity of LVs:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="160"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Бележки по изданието</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="150"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Съществуващи проблеми</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="17"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="72"/>
        <source>Select language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
        <source>&amp;Support</source>
        <translation>&amp;Поддръжка</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="130"/>
        <source>&amp;About</source>
        <translation>&amp;Относно</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="76"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Добре дошли при инсталатора на %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="75"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Добре дошли при инсталатора Calamares на %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="71"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="72"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="90"/>
        <source>About %1 setup</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="91"/>
        <source>About %1 installer</source>
        <translation>Относно инсталатор %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="94"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/calamares/calamares/&quot;&gt;Calamares translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="201"/>
        <source>%1 support</source>
        <translation>%1 поддръжка</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="57"/>
        <source>Welcome</source>
        <translation>Добре дошли</translation>
    </message>
</context>
</TS>
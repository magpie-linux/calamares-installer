<?xml version="1.0" ?><!DOCTYPE TS><TS language="ko" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="71"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>이 시스템의 &lt;strong&gt;부트 환경&lt;/strong&gt;입니다. &lt;br&gt; &lt;br&gt; 오래된 x86 시스템은 &lt;strong&gt;BIOS&lt;/strong&gt;만을 지원합니다. &lt;br&gt; 최근 시스템은 주로 &lt;strong&gt;EFI&lt;/strong&gt;를 사용하지만, 호환 모드로 시작한 경우 BIOS로 나타날 수도 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="81"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>이 시스템은 &lt;strong&gt;EFI&lt;/strong&gt; 부트 환경에서 시동되었습니다. &lt;br&gt; &lt;br&gt; EFI 환경에서의 시동에 대해 설정하려면, &lt;strong&gt;EFI 시스템 파티션&lt;/strong&gt;에 &lt;strong&gt;GRUB&lt;/strong&gt;나 &lt;strong&gt;systemd-boot&lt;/strong&gt;와 같은 부트 로더 애플리케이션을 배치해야 합니다. 이 과정은 자동으로 진행됩니다. 단, 수동 파티셔닝을 선택할 경우, EFI 시스템 파티션을 직접 선택 또는 작성해야 합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="93"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>이 시스템은 &lt;strong&gt;BIOS 부트 환경&lt;/strong&gt;에서 시동되었습니다. &lt;br&gt; &lt;br&gt; BIOS 환경에서의 시동에 대해 설정하려면, 파티션의 시작 위치 또는 파티션 테이블의 시작 위치 근처(권장)에 있는 &lt;strong&gt;마스터 부트 레코드&lt;/strong&gt;에 &lt;strong&gt;GRUB&lt;/strong&gt;과 같은 부트 로더를 설치해야 합니다. 이 과정은 자동으로 진행됩니다. 단, 수동 파티셔닝을 선택할 경우, 사용자가 직접 설정을 해야 합니다.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="70"/>
        <source>Master Boot Record of %1</source>
        <translation>%1의 마스터 부트 레코드</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="104"/>
        <source>Boot Partition</source>
        <translation>부트 파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="109"/>
        <source>System Partition</source>
        <translation>시스템 파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="139"/>
        <source>Do not install a boot loader</source>
        <translation>부트로더를 설치하지 않습니다</translation>
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
        <translation>빈 페이지</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>전역 스토리지</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>작업 대기열</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>모듈</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>유형:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="64"/>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>없음</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>인터페이스:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>도구</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="106"/>
        <source>Reload Stylesheet</source>
        <translation>스타일시트 새로고침</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="113"/>
        <source>Widget Tree</source>
        <translation>위젯 트리</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="233"/>
        <source>Debug information</source>
        <translation>디버그 정보</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="121"/>
        <source>Set up</source>
        <translation>설정</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="122"/>
        <source>Install</source>
        <translation>설치</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="39"/>
        <source>Job failed (%1)</source>
        <translation>(% 1) 작업 실패</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="39"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>프로그래밍된 작업 실패가 명시적으로 요청되었습니다.</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="102"/>
        <source>Done</source>
        <translation>완료</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="27"/>
        <source>Example job (%1)</source>
        <translation>작업 예제 (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation>대상 시스템에서 &apos;%1&apos; 명령을 실행합니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>&apos;%1&apos; 명령을 실행합니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="59"/>
        <source>Running command %1 %2</source>
        <translation>명령 %1 %2 실행중</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="273"/>
        <source>Running %1 operation.</source>
        <translation>%1 명령을 실행중</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="288"/>
        <source>Bad working directory path</source>
        <translation>잘못된 작업 디렉터리 경로</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="289"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>파이썬 작업 %2에 대한 작업 디렉터리 %1을 읽을 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="299"/>
        <source>Bad main script file</source>
        <translation>잘못된 주 스크립트 파일</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="300"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>파이썬 작업 %2에 대한 주 스크립트 파일 %1을 읽을 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="377"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>작업 &quot;%1&quot;에서 Boost.Python 오류</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="167"/>
        <source>Waiting for %n module(s).</source>
        <translation><numerusform>%n 모듈(들)을 기다리는 중.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="168"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n 초)</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="173"/>
        <source>System-requirements checking is complete.</source>
        <translation>시스템 요구사항 검사가 완료 되었습니다.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="377"/>
        <source>&amp;Back</source>
        <translation>뒤로 (&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="372"/>
        <source>&amp;Next</source>
        <translation>다음 (&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="394"/>
        <source>&amp;Cancel</source>
        <translation>취소 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="361"/>
        <source>Cancel setup without changing the system.</source>
        <translation>시스템을 변경 하지 않고 설치를 취소합니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="362"/>
        <source>Cancel installation without changing the system.</source>
        <translation>시스템 변경 없이 설치를 취소합니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="197"/>
        <source>Setup Failed</source>
        <translation>설치 실패</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="222"/>
        <source>Calamares Initialization Failed</source>
        <translation>Calamares 초기화 실패</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="223"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 가 설치될 수 없습니다. Calamares가 모든 구성된 모듈을 불러올 수 없었습니다. 이것은 Calamares가 분포에 의해 사용되는 방식에서 비롯된 문제입니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="228"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>다음 모듈 불러오기 실패:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="290"/>
        <source>Continue with installation?</source>
        <translation>설치를 계속하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="292"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>%1 설치 프로그램이 %2을(를) 설정하기 위해 디스크를 변경하려고 하는 중입니다.&lt;br/&gt;&lt;strong&gt;이러한 변경은 취소할 수 없습니다.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="299"/>
        <source>&amp;Set up now</source>
        <translation>지금 설치 (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="355"/>
        <source>&amp;Set up</source>
        <translation>설치 (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="356"/>
        <source>&amp;Install</source>
        <translation>설치(&amp;I)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="358"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>설치가 완료 되었습니다. 설치 프로그램을 닫습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="441"/>
        <source>Cancel setup?</source>
        <translation>설치를 취소 하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="442"/>
        <source>Cancel installation?</source>
        <translation>설치를 취소하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="444"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>현재 설정 프로세스를 취소하시겠습니까?
설치 프로그램이 종료되고 모든 변경 내용이 손실됩니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="446"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>정말로 현재 설치 프로세스를 취소하시겠습니까?
설치 관리자가 종료되며 모든 변경은 반영되지 않습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="454"/>
        <source>&amp;Yes</source>
        <translation>예(&amp;Y)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="455"/>
        <source>&amp;No</source>
        <translation>아니오(&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="204"/>
        <source>&amp;Close</source>
        <translation>닫기(&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="289"/>
        <source>Continue with setup?</source>
        <translation>설치를 계속하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="295"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>%1 인스톨러가 %2를 설치하기 위해 사용자의 디스크의 내용을 변경하려고 합니다. &lt;br/&gt; &lt;strong&gt;이 변경 작업은 되돌릴 수 없습니다.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="300"/>
        <source>&amp;Install now</source>
        <translation>지금 설치 (&amp;I)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="307"/>
        <source>Go &amp;back</source>
        <translation>뒤로 이동 (&amp;b)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="382"/>
        <source>&amp;Done</source>
        <translation>완료 (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="359"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>설치가 완료되었습니다. 설치 관리자를 닫습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="201"/>
        <source>Error</source>
        <translation>오류</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="198"/>
        <source>Installation Failed</source>
        <translation>설치 실패</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="270"/>
        <source>Unknown exception type</source>
        <translation>알 수 없는 예외 유형</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="284"/>
        <source>unparseable Python error</source>
        <translation>구문 분석할 수 없는 파이썬 오류</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="324"/>
        <source>unparseable Python traceback</source>
        <translation>구문 분석할 수 없는 파이썬 역추적 정보</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="329"/>
        <source>Unfetchable Python error.</source>
        <translation>가져올 수 없는 파이썬 오류</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="72"/>
        <source>%1 Setup Program</source>
        <translation>%1 설치 프로그램</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="73"/>
        <source>%1 Installer</source>
        <translation>%1 설치 관리자</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="142"/>
        <source>Show debug information</source>
        <translation>디버그 정보 보기</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="45"/>
        <source>Gathering system information...</source>
        <translation>시스템 정보 수집 중...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="154"/>
        <source>After:</source>
        <translation>이후:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="330"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
        <translation>&lt;strong&gt;수동 파티션 작업&lt;/strong&gt;&lt;br/&gt;직접 파티션을 만들거나 크기를 조정할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1024"/>
        <source>Boot loader location:</source>
        <translation>부트 로더 위치 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="152"/>
        <source>Select storage de&amp;vice:</source>
        <translation>저장 장치 선택 (&amp;v)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="153"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="951"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="996"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1082"/>
        <source>Current:</source>
        <translation>현재:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="827"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>%2의 홈 파티션으로 %1을 재사용합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="952"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;축소할 파티션을 선택한 다음 하단 막대를 끌어 크기를 조정합니다.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="967"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1이 %2MiB로 축소되고 %4에 대해 새 %3MiB 파티션이 생성됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1073"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;설치할 파티션을 선택합니다.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1129"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>이 시스템에서는 EFI 시스템 파티션을 찾을 수 없습니다. 돌아가서 수동 파티션 작업을 사용하여 %1을 설정하세요.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1138"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>%1의 EFI 시스템 파티션은 %2의 시작으로 사용될 것입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1146"/>
        <source>EFI system partition:</source>
        <translation>EFI 시스템 파티션:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1264"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>이 저장 장치에는 운영 체제가없는 것 같습니다. 무엇을하고 싶으십니까?&lt;br/&gt;저장 장치를 변경하기 전에 선택 사항을 검토하고 확인할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1269"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1307"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1330"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1356"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;디스크 지우기&lt;/strong&gt;&lt;br/&gt;그러면 선택한 저장 장치에 현재 있는 모든 데이터가 &lt;font color=&quot;red&quot;&gt;삭제&lt;/font&gt;됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1297"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>이 저장 장치에 %1이 있습니다. 무엇을하고 싶으십니까?&lt;br/&gt;저장 장치를 변경하기 전에 선택 사항을 검토하고 확인할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1501"/>
        <source>No Swap</source>
        <translation>스왑 없음</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1506"/>
        <source>Reuse Swap</source>
        <translation>스왑 재사용</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1509"/>
        <source>Swap (no Hibernate)</source>
        <translation>스왑 (최대 절전모드 아님)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1512"/>
        <source>Swap (with Hibernate)</source>
        <translation>스왑 (최대 절전모드 사용)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1515"/>
        <source>Swap to file</source>
        <translation>파일로 스왑</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1273"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1303"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1326"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1352"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;함께 설치&lt;/strong&gt;&lt;br/&gt;설치 관리자가 파티션을 축소하여 %1 공간을 확보합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1277"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1312"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1334"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1360"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;파티션 바꾸기&lt;/strong&gt;&lt;br/&gt;파티션을 %1로 바꿉니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1321"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>이 저장 장치에는 이미 운영 체제가 있습니다. 무엇을하고 싶으십니까?&lt;br/&gt;저장 장치를 변경하기 전에 선택 사항을 검토하고 확인할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1347"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>이 저장 장치에는 여러 개의 운영 체제가 있습니다. 무엇을하고 싶으십니까?&lt;br/&gt;저장 장치를 변경하기 전에 선택 사항을 검토하고 확인할 수 있습니다.</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="47"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>파티셔닝 작업을 위해 %1의 마운트를 모두 해제합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="55"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>파티셔닝 작업을 위해 %1의 마운트를 모두 해제하는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="192"/>
        <source>Cleared all mounts for %1</source>
        <translation>%1의 모든 마운트가 해제되었습니다.</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="42"/>
        <source>Clear all temporary mounts.</source>
        <translation>모든 임시 마운트들을 해제합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="49"/>
        <source>Clearing all temporary mounts.</source>
        <translation>모든 임시 마운트들이 해제하는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="60"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>임시 마운트들의 목록을 가져올 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="99"/>
        <source>Cleared all temporary mounts.</source>
        <translation>모든 임시 마운트들이 해제되었습니다.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="128"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="139"/>
        <source>Could not run command.</source>
        <translation>명령을 실행할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="129"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation>이 명령은 호스트 환경에서 실행되며 루트 경로를 알아야하지만, rootMountPoint가 정의되지 않았습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="140"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation>이 명령은 사용자 이름을 알아야 하지만, username이 정의되지 않았습니다.</translation>
    </message>
</context>
<context>
    <name>ContextualProcessJob</name>
    <message>
        <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="117"/>
        <source>Contextual Processes Job</source>
        <translation>컨텍스트 프로세스 작업</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>파티션 생성</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>파티션 유형 (&amp;T):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>주 파티션 (&amp;P)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>확장 파티션 (&amp;E)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>파일 시스템 (&amp;l):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>LVM LV name</source>
        <translation>LVM 논리 볼륨 이름</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="188"/>
        <source>Flags:</source>
        <translation>플래그:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="161"/>
        <source>&amp;Mount Point:</source>
        <translation>마운트 위치 (&amp;M):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>크기(&amp;z):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="72"/>
        <source>En&amp;crypt</source>
        <translation>암호화 (&amp;c)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="151"/>
        <source>Logical</source>
        <translation>논리 파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="156"/>
        <source>Primary</source>
        <translation>파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="173"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="262"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>마운트 위치가 이미 사용 중입니다. 다른 위치를 선택해주세요.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="44"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation>%1 파일 시스템으로 %4(%3)에 새 %2MiB 파티션을 만듭니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="55"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; 파일 시스템으로 &lt;strong&gt;%4&lt;/strong&gt; (%3)에 새 &lt;strong&gt;%2MiB&lt;/strong&gt; 파티션을 만듭니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="67"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>%2에 새로운 %1 파티션 테이블을 만드는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="79"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>디스크 &apos;%1&apos;에 파티션을 생성하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>파티션 테이블을 만듭니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>새로운 파티션 테이블의 생성은 디스크에 있는 모든 데이터를 지울 것입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>만들고자 하는 파티션 테이블의 종류는 무엇인가요?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>마스터 부트 레코드 (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID 파티션 테이블 (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>%2에 %1 파티션 테이블을 만듭니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="54"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;에 새로운 &lt;strong&gt;%1&lt;/strong&gt; 파티션 테이블을 만듭니다 (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="64"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>%2에 새로운 %1 파티션 테이블을 만드는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="82"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>설치 관리자가 %1에 파티션 테이블을 만들지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="51"/>
        <source>Create user %1</source>
        <translation>%1 사용자를 만듭니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="58"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;사용자를 만듭니다 .</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="65"/>
        <source>Creating user %1.</source>
        <translation>%1 사용자를 만드는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="81"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Sudoers 디렉터리가 쓰기 금지되어 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="85"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>sudoers 파일을 만들 수가 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="93"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>sudoers 파일의 권한을 변경할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="99"/>
        <source>Cannot open groups file for reading.</source>
        <translation>groups 파일을 읽을 수가 없습니다.</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="37"/>
        <source>Create Volume Group</source>
        <translation>볼륨 그룹 생성</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named %1.</source>
        <translation>%1로 이름 지정된 새 볼륨 그룹을 생성합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="45"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;로 이름 지정된 새 볼륨 그룹을 생성중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="52"/>
        <source>Creating new volume group named %1.</source>
        <translation>%1로 이름 지정된 새 볼륨 그룹을 생성중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="65"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>설치 관리자가 &apos;%1&apos;로 이름 지정된 볼륨 그룹을 생성하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>Deactivate volume group named %1.</source>
        <translation>%1로 이름 지정된 볼륨 그룹을 비활성화합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="41"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;로 이름 지정된 볼륨 그룹을 비활성화합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>%1로 이름 지정된 볼륨 그룹을 비활성화하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="40"/>
        <source>Delete partition %1.</source>
        <translation>%1 파티션을 지웁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="48"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; 파티션을 지웁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>Deleting partition %1.</source>
        <translation>%1 파티션을 지우는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="68"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>설치 관리자가 %1 파티션을 지우지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="151"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>선택한 저장 장치의 &lt;strong&gt;파티션 테이블&lt;/strong&gt; 유형입니다.&lt;br&gt;&lt;br&gt;파티션 테이블 유형을 변경하는 유일한 방법은 파티션 테이블을 처음부터 지우고 재생성하는 것입니다. 이렇게 하면 스토리지 디바이스의 모든 데이터가 삭제됩니다.&lt;br&gt;달리 선택하지 않으면 이 설치 관리자는 현재 파티션 테이블을 유지합니다.&lt;br&gt;확실하지 않은 경우 최신 시스템에서는 GPT가 선호됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="108"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>이 장치는 &lt;strong&gt;%1&lt;/strong&gt; 파티션 테이블을 갖고 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="115"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>이것은 &lt;strong&gt;루프&lt;/strong&gt; 장치입니다.&lt;br&gt;&lt;br&gt;파티션 테이블이 없는 사이비 장치이므로 파일을 블록 장치로 액세스할 수 있습니다. 이러한 종류의 설정은 일반적으로 단일 파일 시스템만 포함합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="122"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>이 설치 관리자는 선택한 저장 장치에서 &lt;strong&gt;파티션 테이블을 검색할 수 없습니다.&lt;/strong&gt;&lt;br&gt;&lt;br&gt;장치에 파티션 테이블이 없거나 파티션 테이블이 손상되었거나 알 수 없는 유형입니다.&lt;br&gt;이 설치 관리자는 자동으로 또는 수동 파티션 페이지를 통해 새 파티션 테이블을 생성할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="132"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;&lt;strong&gt;EFI&lt;/strong&gt; 부팅 환경에서 시작하는 최신 시스템에 권장되는 파티션 테이블 유형입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="138"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;이 파티션 테이블 유형은 &lt;strong&gt;BIOS&lt;/strong&gt; 부팅 환경에서 시작하는 이전 시스템에만 권장됩니다. GPT는 대부분의 다른 경우에 권장됩니다.&lt;br&gt;&lt;br&gt;&lt;strong&gt;경고 : &lt;/strong&gt;MBR 파티션 테이블은 구식 MS-DOS 표준입니다.&lt;br&gt;&lt;em&gt;기본&lt;/em&gt; 파티션은 4개만 생성할 수 있으며, 이 4개 중 1개는 &lt;em&gt;확장&lt;/em&gt; 파티션일 수 있으며, 이 파티션에는 여러 개의 &lt;em&gt;논리&lt;/em&gt; 파티션이 포함될 수 있습니다.</translation>
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
        <translation>%1 - (%2)</translation>
    </message>
</context>
<context>
    <name>DracutLuksCfgJob</name>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="131"/>
        <source>Write LUKS configuration for Dracut to %1</source>
        <translation>Dracut에 대한 LUKS 설정을 %1에 쓰기</translation>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="133"/>
        <source>Skip writing LUKS configuration for Dracut: &quot;/&quot; partition is not encrypted</source>
        <translation>Dracut에 대한 LUKS 설정 쓰기 건너뛰기 : &quot;/&quot; 파티션이 암호화되지 않음</translation>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="149"/>
        <source>Failed to open %1</source>
        <translation>%1을 열지 못했습니다</translation>
    </message>
</context>
<context>
    <name>DummyCppJob</name>
    <message>
        <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="47"/>
        <source>Dummy C++ Job</source>
        <translation>C++ 더미 작업</translation>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="20"/>
        <source>Edit Existing Partition</source>
        <translation>기존 파티션을 수정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>내용 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>유지 (&amp;K)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>포맷</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>경고: 파티션을 포맷하는 것은 모든 데이터를 지울 것입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>마운트 위치 (&amp;M):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>크기 (&amp;z):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="136"/>
        <source>Fi&amp;le System:</source>
        <translation>파일 시스템 (&amp;l):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="149"/>
        <source>Flags:</source>
        <translation>플래그:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="269"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>마운트 위치가 이미 사용 중입니다. 다른 위치를 선택해주세요.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>암호화 시스템 (&amp;c)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>암호</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>암호 확인</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="151"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>암호와 암호 확인 상자에 동일한 값을 입력해주세요.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="130"/>
        <source>Set partition information</source>
        <translation>파티션 정보 설정</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="153"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>&lt;strong&gt;새&lt;/strong&gt; %2 시스템 파티션에 %1를설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="157"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>마운트 위치 &lt;strong&gt;%1&lt;/strong&gt;을 사용하여 &lt;strong&gt;새&lt;/strong&gt; 파티션 %2를 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="165"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>시스템 파티션 &lt;strong&gt;%1&lt;/strong&gt;의 %3에 %2를 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt; 마운트 위치를 사용하여 파티션 &lt;strong&gt;%1&lt;/strong&gt;의 %3 을 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="182"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;에 부트 로더를 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="192"/>
        <source>Setting up mount points.</source>
        <translation>마운트 위치를 설정 중입니다.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="95"/>
        <source>&lt;Restart checkbox tooltip&gt;</source>
        <translation>&lt;Restart checkbox tooltip&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="98"/>
        <source>&amp;Restart now</source>
        <translation>지금 재시작 (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="54"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation>&lt;h1&gt;모두 완료.&lt;/h1&gt;&lt;br/&gt;%1이 컴퓨터에 설정되었습니다.&lt;br/&gt;이제 새 시스템을 사용할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="58"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;이 확인란을 선택하면 &lt;span style=&quot;font-style:italic;&quot;&gt;완료&lt;/span&gt;를 클릭하거나 설치 프로그램을 닫으면 시스템이 즉시 다시 시작됩니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="66"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;모두 완료되었습니다.&lt;/h1&gt;&lt;br/&gt;%1이 컴퓨터에 설치되었습니다.&lt;br/&gt;이제 새 시스템으로 다시 시작하거나 %2 라이브 환경을 계속 사용할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;이 확인란을 선택하면 &lt;span style=&quot;font-style:italic;&quot;&gt;완료&lt;/span&gt;를 클릭하거나 설치 관리자를 닫으면 시스템이 즉시 다시 시작됩니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="133"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;설치 실패&lt;/h1&gt;&lt;br/&gt;%1이 컴퓨터에 설정되지 않았습니다.&lt;br/&gt;오류 메시지 : %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="139"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;설치에 실패했습니다.&lt;/h1&gt;&lt;br/&gt;%1이 컴퓨터에 설치되지 않았습니다.&lt;br/&gt;오류 메시지는 %2입니다.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="78"/>
        <source>Finish</source>
        <translation>완료</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="132"/>
        <source>Setup Complete</source>
        <translation>설치 완료</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="133"/>
        <source>Installation Complete</source>
        <translation>설치 완료</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="135"/>
        <source>The setup of %1 is complete.</source>
        <translation>%1 설치가 완료되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="136"/>
        <source>The installation of %1 is complete.</source>
        <translation>%1의 설치가 완료되었습니다.</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="41"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>%4의 %1 포맷 파티션(파일 시스템: %2, 크기: %3 MiB)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="52"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%3MiB&lt;/strong&gt; 파티션 &lt;strong&gt;%1&lt;/strong&gt;을 파일 시스템 &lt;strong&gt;%2&lt;/strong&gt;로 포맷합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>%1 파티션을 %2 파일 시스템으로 포맷하는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="77"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>설치 관리자가 &apos;%2&apos; 디스크에 있는 %1 파티션을 포맷하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="108"/>
        <source>has at least %1 GiB available drive space</source>
        <translation>%1 GiB 이상의 사용 가능한 드라이브 공간이 있음</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="109"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation>드라이브 공간이 부족합니다. %1 GiB 이상이 필요합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="116"/>
        <source>has at least %1 GiB working memory</source>
        <translation>%1 GiB 이상의 작동 메모리가 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="117"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>시스템에 충분한 작동 메모리가 없습니다. %1 GiB 이상이 필요합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="124"/>
        <source>is plugged in to a power source</source>
        <translation>전원 공급이 연결되어 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="125"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>이 시스템은 전원 공급이 연결되어 있지 않습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="132"/>
        <source>is connected to the Internet</source>
        <translation>인터넷에 연결되어 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="133"/>
        <source>The system is not connected to the Internet.</source>
        <translation>이 시스템은 인터넷에 연결되어 있지 않습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="142"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>설치 프로그램이 관리자 권한으로 실행되고 있지 않습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="143"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>설치 관리자가 관리자 권한으로 동작하고 있지 않습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="152"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>화면이 너무 작아서 설정 프로그램을 표시할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="153"/>
        <source>The screen is too small to display the installer.</source>
        <translation>설치 관리자를 표시하기에 화면이 너무 작습니다.</translation>
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
        <translation>OEM 배치 식별자</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="48"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>&lt;code&gt;%1&lt;/code&gt; 디렉토리를 생성할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>&lt;code&gt;%1&lt;/code&gt; 파일을 열 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="68"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>&lt;code&gt;%1&lt;/code&gt; 파일에 쓸 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="40"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation>mkinitcpio를 사용하여 initramfs 만드는 중.</translation>
    </message>
</context>
<context>
    <name>InitramfsJob</name>
    <message>
        <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="37"/>
        <source>Creating initramfs.</source>
        <translation>initramfs를 만드는 중.</translation>
    </message>
</context>
<context>
    <name>InteractiveTerminalPage</name>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="53"/>
        <source>Konsole not installed</source>
        <translation>Konsole이 설치되지 않았음</translation>
    </message>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="54"/>
        <source>Please install KDE Konsole and try again!</source>
        <translation>KDE Konsole을 설치한 후에 다시 시도해주세요!</translation>
    </message>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="116"/>
        <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
        <translation>스크립트 실행: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
</context>
<context>
    <name>InteractiveTerminalViewStep</name>
    <message>
        <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="47"/>
        <source>Script</source>
        <translation>스크립트</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="219"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>키보드 모델을 %1로 설정합니다.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="223"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>키보드 레이아웃을 %1/%2로 설정합니다.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>키보드</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="34"/>
        <source>System locale setting</source>
        <translation>시스템 로케일 설정</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="41"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>시스템 로케일 설정은 일부 명령줄 사용자 인터페이스 요소의 언어 및 문자 집합에 영향을 줍니다.&lt;br/&gt;현재 설정은 &lt;strong&gt;%1&lt;/strong&gt;입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="66"/>
        <source>&amp;Cancel</source>
        <translation>취소 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="67"/>
        <source>&amp;OK</source>
        <translation>확인 (&amp;O)</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="123"/>
        <source>I accept the terms and conditions above.</source>
        <translation>상기 계약 조건을 모두 동의합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="146"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;라이센스 동의&lt;/h1&gt;이 설치 절차는 라이센스 조항의 적용을 받는 독점 소프트웨어를 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>상기 최종 사용자 라이센스 동의 (EULAs) 를 검토해주시길 바랍니다.&lt;br/&gt;조건에 동의하지 않는다면, 설치 절차를 계속할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="155"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
        <translation>&lt;h1&gt;라이센스 동의&lt;/h1&gt;이 설치 절차는 추가적인 기능들을 제공하고 사용자 환경을 개선하기 위한 독점 소프트웨어를 설치할 수 있으며, 이 소프트웨어는 라이센스 조항의 적용을 받습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="160"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>상기 최종 사용자 라이센스 동의 (EULAs) 를 검토해주시길 바랍니다. &lt;br/&gt;조건에 동의하지 않는다면, 독점 소프트웨어는 설치되지 않을 것이며, 대체하여 사용할 수 있는 오픈 소스 소프트웨어가 사용될 것입니다.</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="51"/>
        <source>License</source>
        <translation>라이센스</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 드라이버&lt;/strong&gt;&lt;br/&gt;by %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="129"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 그래픽 드라이버&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="135"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 브라우저 플러그인&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="141"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 코덱&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="147"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 패키지&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="153"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="191"/>
        <source>Shows the complete license text</source>
        <translation>전체 라이센스 텍스트 표시</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="192"/>
        <source>Hide license text</source>
        <translation>라이센스 텍스트 숨기기</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="196"/>
        <source>Show license agreement</source>
        <translation>라이센스 계약 표시</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="197"/>
        <source>Hide license agreement</source>
        <translation>라이센스 계약 숨기기</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="201"/>
        <source>Opens the license agreement in a browser window.</source>
        <translation>브라우저 창에서 사용권 계약 열기.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="202"/>
        <source>&lt;a href=&quot;%1&quot;&gt;View license agreement&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;라이센스 계약 보기&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="396"/>
        <source>The system language will be set to %1.</source>
        <translation>시스템 언어가 %1로 설정됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="397"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>숫자와 날짜 로케일이 %1로 설정됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="219"/>
        <source>Region:</source>
        <translation>지역 :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="220"/>
        <source>Zone:</source>
        <translation>표준시간대 :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="224"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="225"/>
        <source>&amp;Change...</source>
        <translation>변경 (&amp;C)...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="404"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>표준시간대를 %1/%2로 설정합니다.&lt;br/&gt;</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="55"/>
        <source>Loading location data...</source>
        <translation>위치 정보를 불러오는 중입니다...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="132"/>
        <source>Location</source>
        <translation>위치</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="39"/>
        <source>Configuring LUKS key file.</source>
        <translation>LUKS 키 파일 구성 중.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="156"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="164"/>
        <source>No partitions are defined.</source>
        <translation>파티션이 정의되지 않았습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="192"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="199"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="207"/>
        <source>Encrypted rootfs setup error</source>
        <translation>암호화된 rootfs 설정 오류</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="193"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>루트 파티션 %1이(가) LUKS이지만 암호가 설정되지 않았습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="200"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>루트 파티션 %1에 대한 LUKS 키 파일을 생성할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="208"/>
        <source>Could configure LUKS key file on partition %1.</source>
        <translation>%1 파티션에서 LUKS 키 파일을 구성할 수 있습니다.</translation>
    </message>
</context>
<context>
    <name>NetInstallPage</name>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="62"/>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="63"/>
        <source>Description</source>
        <translation>설명</translation>
    </message>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="84"/>
        <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
        <translation>네트워크 설치. (불가: 패키지 목록을 가져올 수 없습니다. 네트워크 연결을 확인해주세요)</translation>
    </message>
    <message>
        <location filename="../src/modules/netinstall/NetInstallPage.cpp" line="94"/>
        <source>Network Installation. (Disabled: Received invalid groups data)</source>
        <translation>네트워크 설치. (불가: 유효하지 않은 그룹 데이터를 수신했습니다)</translation>
    </message>
</context>
<context>
    <name>NetInstallViewStep</name>
    <message>
        <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
        <source>Package selection</source>
        <translation>패키지 선택</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="28"/>
        <source>Ba&amp;tch:</source>
        <translation>배치(&amp;T):</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="38"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;여기에 배치 식별자를 입력합니다. 대상 시스템에 저장됩니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="48"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM 구성&lt;/h1&gt; &lt;p&gt;Calamares는 대상 시스템을 구성하는 동안 OEM 설정을 사용합니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="121"/>
        <source>OEM Configuration</source>
        <translation>OEM 구성</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="126"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>OEM 배치 식별자를 &lt;code&gt;%1&lt;/code&gt;로 설정합니다.</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="63"/>
        <source>Password is too short</source>
        <translation>암호가 너무 짧습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="85"/>
        <source>Password is too long</source>
        <translation>암호가 너무 깁니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="169"/>
        <source>Password is too weak</source>
        <translation>암호가 너무 취약합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="176"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>&apos;%1&apos;을 설정하는 중 메모리 할당 오류</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="180"/>
        <source>Memory allocation error</source>
        <translation>메모리 할당 오류</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="182"/>
        <source>The password is the same as the old one</source>
        <translation>암호가 이전과 같습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="184"/>
        <source>The password is a palindrome</source>
        <translation>암호가 앞뒤로 동일해 보이는 단어입니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="186"/>
        <source>The password differs with case changes only</source>
        <translation>암호가 대소문자만 다릅니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>The password is too similar to the old one</source>
        <translation>암호가 이전 암호와 너무 유사합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="190"/>
        <source>The password contains the user name in some form</source>
        <translation>암호가 사용자 이름의 일부를 포함하고 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="192"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>암호가 사용자 실명의 일부를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="194"/>
        <source>The password contains forbidden words in some form</source>
        <translation>암호가 금지된 단어를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="197"/>
        <source>The password contains less than %1 digits</source>
        <translation>암호가 %1개 미만의 숫자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="198"/>
        <source>The password contains too few digits</source>
        <translation>암호가 너무 적은 개수의 숫자들을 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password contains less than %1 uppercase letters</source>
        <translation>암호가 %1개 미만의 대문자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
        <source>The password contains too few uppercase letters</source>
        <translation>암호가 너무 적은 개수의 대문자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password contains less than %1 lowercase letters</source>
        <translation>암호가 %1개 미만의 소문자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
        <source>The password contains too few lowercase letters</source>
        <translation>암호가 너무 적은 개수의 소문자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains less than %1 non-alphanumeric characters</source>
        <translation>암호가 %1개 미만의 영숫자가 아닌 문자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>암호가 너무 적은 개수의 영숫자가 아닌 문자를 포함하고 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
        <source>The password is shorter than %1 characters</source>
        <translation>암호가 %1 문자보다 짧습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password is too short</source>
        <translation>암호가 너무 짧습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="216"/>
        <source>The password is just rotated old one</source>
        <translation>암호가 이전 암호로 바뀌었습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
        <source>The password contains less than %1 character classes</source>
        <translation>암호에 포함된 문자 클래스가 %1개 미만입니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="220"/>
        <source>The password does not contain enough character classes</source>
        <translation>암호에 문자 클래스가 충분하지 않습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="223"/>
        <source>The password contains more than %1 same characters consecutively</source>
        <translation>암호에 동일 문자가 %1개 이상 연속해 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="224"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>암호에 너무 많은 동일 문자가 연속해 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="227"/>
        <source>The password contains more than %1 characters of the same class consecutively</source>
        <translation>암호에 동일 문자 클래스가 %1개 이상 연속해 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>암호에 동일 문자 클래스가 너무 많이 연속해 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="231"/>
        <source>The password contains monotonic sequence longer than %1 characters</source>
        <translation>암호에 %1개 이상의 단순 문자열이 포함되어 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>암호에 너무 길게 단순 문자열이 포함되어 있습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="234"/>
        <source>No password supplied</source>
        <translation>암호가 제공 되지 않음</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="236"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>RNG 장치에서 임의의 번호를 가져올 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="238"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>암호 생성 실패 - 설정에 필요한 엔트로피가 너무 작음</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>암호가 사전 검사에 실패했습니다 - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="245"/>
        <source>The password fails the dictionary check</source>
        <translation>암호가 사전 검사에 실패했습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>Unknown setting - %1</source>
        <translation>설정되지 않음 - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="253"/>
        <source>Unknown setting</source>
        <translation>설정되지 않음</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="257"/>
        <source>Bad integer value of setting - %1</source>
        <translation>설정의 잘못된 정수 값 - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="261"/>
        <source>Bad integer value</source>
        <translation>잘못된 정수 값</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>Setting %1 is not of integer type</source>
        <translation>설정값 %1은 정수 유형이 아닙니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>Setting is not of integer type</source>
        <translation>설정값이 정수 형식이 아닙니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="273"/>
        <source>Setting %1 is not of string type</source>
        <translation>설정값 %1은 문자열 유형이 아닙니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="277"/>
        <source>Setting is not of string type</source>
        <translation>설정값이 문자열 유형이 아닙니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="279"/>
        <source>Opening the configuration file failed</source>
        <translation>구성 파일을 열지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="281"/>
        <source>The configuration file is malformed</source>
        <translation>구성 파일의 형식이 잘못되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="283"/>
        <source>Fatal failure</source>
        <translation>치명적인 실패</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="285"/>
        <source>Unknown error</source>
        <translation>알 수 없는 오류</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>키보드 모델:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>키보드를 테스트하기 위해 여기에 입력하세요</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>이름이 무엇인가요?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>로그인할 때 사용할 이름은 무엇인가요?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>사용자 계정의 보안을 유지하기 위한 암호를 선택하세요.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;확인을 위해 암호를 두번 입력해 주세요. 올바른 암호에는 문자, 숫자 및 구두점이 혼합되어 있으며 최소 8자 이상이어야 하며 정기적으로 변경해야 합니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>이 컴퓨터의 이름은 무엇인가요?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;이 이름은 컴퓨터가 네트워크의 다른 사용자에게 표시되도록 할 때 사용됩니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="466"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>암호를 묻지 않고 자동으로 로그인합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="473"/>
        <source>Use the same password for the administrator account.</source>
        <translation>관리자 계정에 대해 같은 암호를 사용합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="496"/>
        <source>Choose a password for the administrator account.</source>
        <translation>관리자 계정을 위한 암호를 선택하세요.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="601"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;입력 오류를 검사하기 위해 암호를 똑같이 두번 입력하세요.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="197"/>
        <source>Root</source>
        <translation>루트</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="200"/>
        <source>Home</source>
        <translation>홈</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="202"/>
        <source>Boot</source>
        <translation>부트</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>EFI system</source>
        <translation>EFI 시스템</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>스왑</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="209"/>
        <source>New partition for %1</source>
        <translation>%1에 대한 새로운 파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition</source>
        <translation>새로운 파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="230"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="144"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="176"/>
        <source>Free Space</source>
        <translation>여유 공간</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="148"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="180"/>
        <source>New partition</source>
        <translation>새로운 파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="264"/>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="266"/>
        <source>File System</source>
        <translation>파일 시스템</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="268"/>
        <source>Mount Point</source>
        <translation>마운트 위치</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="270"/>
        <source>Size</source>
        <translation>크기</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>저장 장치 (&amp;v):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>모든 변경 되돌리기 (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>새 파티션 테이블 (&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>Cre&amp;ate</source>
        <translation>생성 (&amp;a)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>수정 (&amp;E)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>삭제 (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="132"/>
        <source>New Volume Group</source>
        <translation>새 볼륨 그룹</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="139"/>
        <source>Resize Volume Group</source>
        <translation>볼륨 그룹 크기변경</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="146"/>
        <source>Deactivate Volume Group</source>
        <translation>볼륨 그룹 비활성화</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="153"/>
        <source>Remove Volume Group</source>
        <translation>볼륨 그룹 제거</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="180"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>부트로더 설치 위치 (&amp;l) :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="209"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>%1에 새 파티션 테이블을 생성하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="238"/>
        <source>Can not create new partition</source>
        <translation>새로운 파티션을 만들 수 없습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="239"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>%1의 파티션 테이블에는 이미 %2 기본 파티션이 있으므로 더 이상 추가할 수 없습니다. 대신 기본 파티션 하나를 제거하고 확장 파티션을 추가하세요.</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="78"/>
        <source>Gathering system information...</source>
        <translation>시스템 정보 수집 중...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="130"/>
        <source>Partitions</source>
        <translation>파티션</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="167"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>%1을 다른 운영 체제와 &lt;strong&gt;함께&lt;/strong&gt; 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>디스크를 &lt;strong&gt;지우고&lt;/strong&gt; %1을 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="175"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>파티션을 %1로 &lt;strong&gt;바꿉니다&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="180"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>&lt;strong&gt;수동&lt;/strong&gt; 파티션 작업</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>디스크 &lt;strong&gt;%2&lt;/strong&gt; (%3)에 다른 운영 체제와 &lt;strong&gt;함께&lt;/strong&gt; %1을 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="199"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>디스크 &lt;strong&gt;%2&lt;/strong&gt; (%3)를 &lt;strong&gt;지우고&lt;/strong&gt; %1을 설치합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="205"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>디스크 &lt;strong&gt;%2&lt;/strong&gt; (%3)의 파티션을 %1로 &lt;strong&gt;바꿉니다&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="212"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>디스크 &lt;strong&gt;%1&lt;/strong&gt; (%2) 의 &lt;strong&gt;수동&lt;/strong&gt; 파티션 작업입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="220"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>디스크 &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="248"/>
        <source>Current:</source>
        <translation>현재:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="265"/>
        <source>After:</source>
        <translation>이후:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="415"/>
        <source>No EFI system partition configured</source>
        <translation>EFI 시스템 파티션이 설정되지 않았습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="416"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>%1를 시작하려면 EFI 시스템 파티션이 필요합니다.&lt;br/&gt;&lt;br/&gt;EFI 시스템 파티션을 구성하려면 돌아가서 &lt;strong&gt;esp&lt;/strong&gt; 플래그를 사용하도록 설정한 FAT32 파일 시스템을 선택하거나 생성하여 &lt;strong&gt;%2&lt;/strong&gt; 위치를 마운트합니다.&lt;br/&gt;&lt;br/&gt;EFI 시스템 파티션을 설정하지 않고 계속할 수 있지만 시스템이 시작되지 않을 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="429"/>
        <source>EFI system partition flag not set</source>
        <translation>EFI 시스템 파티션 플래그가 설정되지 않았습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="430"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>%1를 시작하려면 EFI 시스템 파티션이 필요합니다.&lt;br/&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;/strong&gt; 마운트 위치로 파티션이 구성되었지만 해당 &lt;strong&gt;esp&lt;/strong&gt; 플래그가 설정되지 않았습니다.&lt;br/&gt;플래그를 설정하려면 돌아가서 파티션을 편집합니다.&lt;br/&gt;&lt;br/&gt;플래그를 설정하지 않고 계속할 수 있지만 시스템이 시작되지 않을 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="465"/>
        <source>Boot partition not encrypted</source>
        <translation>부트 파티션이 암호화되지 않았습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="466"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>암호화된 루트 파티션과 함께 별도의 부팅 파티션이 설정되었지만 부팅 파티션은 암호화되지 않았습니다.&lt;br/&gt;&lt;br/&gt;중요한 시스템 파일은 암호화되지 않은 파티션에 보관되기 때문에 이러한 설정과 관련하여 보안 문제가 있습니다.&lt;br/&gt;원하는 경우 계속할 수 있지만 나중에 시스템을 시작하는 동안 파일 시스템 잠금이 해제됩니다.&lt;br/&gt;부팅 파티션을 암호화하려면 돌아가서 다시 생성하여 파티션 생성 창에서 &lt;strong&gt;암호화&lt;/strong&gt;를 선택합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="650"/>
        <source>has at least one disk device available.</source>
        <translation>하나 이상의 디스크 장치를 사용할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="651"/>
        <source>There are no partitons to install on.</source>
        <translation>설치할 파티션이 없습니다.</translation>
    </message>
</context>
<context>
    <name>PlasmaLnfJob</name>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="41"/>
        <source>Plasma Look-and-Feel Job</source>
        <translation>플라즈마 모양과 느낌 작업</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="73"/>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="74"/>
        <source>Could not select KDE Plasma Look-and-Feel package</source>
        <translation>KDE 플라즈마 모양과 느낌 패키지를 선택할 수 없습니다</translation>
    </message>
</context>
<context>
    <name>PlasmaLnfPage</name>
    <message>
        <location filename="../src/modules/plasmalnf/page_plasmalnf.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="70"/>
        <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
        <translation>KDE Plasma Desktop의 모양과 느낌을 선택하세요. 시스템을 설정한 후 이 단계를 건너뛰고 모양과 느낌을 구성할 수도 있습니다. 모양과 느낌 선택을 클릭하면 해당 모양을 미리 볼 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="76"/>
        <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
        <translation>KDE Plasma Desktop의 모양과 느낌을 선택하세요. 또한 시스템이 설치되면 이 단계를 건너뛰고 모양과 느낌을 구성할 수도 있습니다. 모양과 느낌 선택을 클릭하면 해당 모양을 미리 볼 수 있습니다.</translation>
    </message>
</context>
<context>
    <name>PlasmaLnfViewStep</name>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="68"/>
        <source>Look-and-Feel</source>
        <translation>Look-and-Feel</translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="84"/>
        <source>Saving files for later ...</source>
        <translation>나중을 위해 파일들을 저장하는 중...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="122"/>
        <source>No files configured to save for later.</source>
        <translation>나중을 위해 저장될 설정된 파일들이 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="176"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>모든 설정된 파일들이 보존되는 것은 아닙니다.</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="382"/>
        <source>
There was no output from the command.</source>
        <translation>
명령으로부터 아무런 출력이 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="383"/>
        <source>
Output:
</source>
        <translation>
출력:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="386"/>
        <source>External command crashed.</source>
        <translation>외부 명령이 실패했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="387"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>&lt;i&gt;%1&lt;/i&gt; 명령이 실패했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="392"/>
        <source>External command failed to start.</source>
        <translation>외부 명령을 시작하지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="393"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>&lt;i&gt;%1&lt;/i&gt; 명령을 시작하지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="397"/>
        <source>Internal error when starting command.</source>
        <translation>명령을 시작하는 중에 내부 오류가 발생했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="398"/>
        <source>Bad parameters for process job call.</source>
        <translation>프로세스 작업 호출에 대한 잘못된 매개 변수입니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="401"/>
        <source>External command failed to finish.</source>
        <translation>외부 명령을 완료하지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="402"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>&lt;i&gt;%1&lt;/i&gt; 명령을 %2초 안에 완료하지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="408"/>
        <source>External command finished with errors.</source>
        <translation>외부 명령이 오류와 함께 완료되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="409"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>&lt;i&gt;%1&lt;/i&gt; 명령이 종료 코드 %2와 함께 완료되었습니다.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="91"/>
        <source>Default Keyboard Model</source>
        <translation>기본 키보드 모델</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="133"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="168"/>
        <source>Default</source>
        <translation>기본</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="207"/>
        <source>unknown</source>
        <translation>알 수 없음</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="209"/>
        <source>extended</source>
        <translation>확장됨</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="211"/>
        <source>unformatted</source>
        <translation>포맷되지 않음</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="213"/>
        <source>swap</source>
        <translation>스왑</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="51"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>분할되지 않은 공간 또는 알 수 없는 파티션 테이블입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="47"/>
        <source>(no mount point)</source>
        <translation>(마운트 위치 없음)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="65"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation>&lt;i&gt;%1&lt;/i&gt; 모듈에 대한 요구사항 검사가 완료되었습니다.</translation>
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
        <translation>%1로 이름 지정된 볼륨 그룹을 제거합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="41"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;로 이름 지정된 볼륨 그룹을 제거합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>설치 관리자가 &apos;%1&apos;이라는 볼륨 그룹을 제거하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="135"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>%1을 설치할 위치를 선택합니다.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;경고: &lt;/font&gt;선택한 파티션의 모든 파일이 삭제됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>선택된 항목은 유효한 파티션으로 표시되지 않습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1은 빈 공간에 설치될 수 없습니다. 존재하는 파티션을 선택해주세요.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="179"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1은 확장 파티션에 설치될 수 없습니다. 주 파티션 혹은 논리 파티션을 선택해주세요.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="189"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1은 이 파티션에 설치될 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="195"/>
        <source>Data partition (%1)</source>
        <translation>데이터 파티션 (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="212"/>
        <source>Unknown system partition (%1)</source>
        <translation>알 수 없는 시스템 파티션 (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="217"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 시스템 파티션 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="228"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 파티션이 %2에 비해 너무 작습니다. 용량이 %3 GiB 이상인 파티션을 선택하십시오.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;이 시스템에서는 EFI 시스템 파티션을 찾을 수 없습니다. 돌아가서 수동 파티션 작업을 사용하여 %1을 설정하세요.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="262"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="279"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="303"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1이 %2에 설치됩니다.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;경고: &lt;/font&gt;%2 파티션의 모든 데이터가 손실됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="271"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>%1의 EFI 시스템 파티션은 %2의 시작으로 사용될 것입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="287"/>
        <source>EFI system partition:</source>
        <translation>EFI 시스템 파티션:</translation>
    </message>
</context>
<context>
    <name>ResizeFSJob</name>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="59"/>
        <source>Resize Filesystem Job</source>
        <translation>파일시스템 작업 크기조정</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="172"/>
        <source>Invalid configuration</source>
        <translation>잘못된 설정</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="173"/>
        <source>The file-system resize job has an invalid configuration and will not run.</source>
        <translation>파일 시스템 크기 조정 작업에 잘못된 설정이 있으며 실행되지 않습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="187"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="197"/>
        <source>KPMCore not Available</source>
        <translation>KPMCore 사용할 수 없음</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="188"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="198"/>
        <source>Calamares cannot start KPMCore for the file-system resize job.</source>
        <translation>Calamares는 파일 시스템 크기 조정 작업을 위해 KPMCore를 시작할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="215"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="228"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="237"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="254"/>
        <source>Resize Failed</source>
        <translation>크기조정 실패</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
        <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
        <translation>이 시스템에서 파일 시스템 %1를 찾을 수 없으므로 크기를 조정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="208"/>
        <source>The device %1 could not be found in this system, and cannot be resized.</source>
        <translation>%1 장치를 이 시스템에서 찾을 수 없으며 크기를 조정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="216"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="229"/>
        <source>The filesystem %1 cannot be resized.</source>
        <translation>파일 시스템 %1의 크기를 조정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="217"/>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="230"/>
        <source>The device %1 cannot be resized.</source>
        <translation>%1 장치의 크기를 조정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="238"/>
        <source>The filesystem %1 must be resized, but cannot.</source>
        <translation>파일 시스템 %1의 크기를 조정해야 하지만 조정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="239"/>
        <source>The device %1 must be resized, but cannot</source>
        <translation>%1 장치의 크기를 조정해야 하지만 조정할 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize partition %1.</source>
        <translation>%1 파티션 크기조정</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="55"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%2MiB&lt;/strong&gt; 파티션 &lt;strong&gt;%1&lt;/strong&gt;의 크기를 &lt;strong&gt;%3MiB&lt;/strong&gt;로 조정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="66"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation>%2MiB 파티션 %1의 크기를 %3MiB로 조정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="85"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>섪치 프로그램이 디스크 &apos;%2&apos;에서 파티션 %1의 크기를 조정하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="39"/>
        <source>Resize Volume Group</source>
        <translation>볼륨 그룹 크기조정</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="55"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>%1 볼륨 그룹의 크기를 %2에서 %3으로 조정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;로 이름 지정된 볼륨 그룹의 크기를 &lt;strong&gt;%2&lt;/strong&gt;에서 &lt;strong&gt;%3&lt;/strong&gt;로 조정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="70"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>설치 프로그램이 &apos;%1&apos;로 이름 지정된 볼륨 그룹의 크기를 조정하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>ResultsListWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="96"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>이 컴퓨터는 %1 설치를 위한 최소 요구 사항을 충족하지 않습니다.&lt;br/&gt;설치를 계속할 수 없습니다.&lt;a href=&quot;#details&quot;&gt;세부 정보...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="100"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>이 컴퓨터는 %1 설치를 위한 최소 요구 사항을 충족하지 않습니다.&lt;br/&gt;설치를 계속할 수 없습니다. &lt;a href=&quot;#details&quot;&gt;세부 사항입니다...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="118"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation>이 컴퓨터는 %1 설치를 위한 권장 요구 사항 중 일부를 충족하지 않습니다.&lt;br/&gt;설치를 계속할 수는 있지만 일부 기능을 사용하지 않도록 설정할 수도 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="122"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>이 컴퓨터는 %1 설치를 위한 권장 요구 사항 중 일부를 충족하지 않습니다.&lt;br/&gt;설치를 계속할 수 있지만 일부 기능을 사용하지 않도록 설정할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="160"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>이 프로그램은 몇 가지 질문을 하고 컴퓨터에 %2을 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="181"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>최상의 결과를 얻으려면 이 컴퓨터가 다음 사항을 충족해야 합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="209"/>
        <source>System requirements</source>
        <translation>시스템 요구 사항</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Scanning storage devices...</source>
        <translation>저장 장치 검색 중...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="85"/>
        <source>Partitioning</source>
        <translation>파티션 작업</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="38"/>
        <source>Set hostname %1</source>
        <translation>호스트 이름을 %1로 설정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="45"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>호스트 이름을 &lt;strong&gt;%1&lt;/strong&gt;로 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="52"/>
        <source>Setting hostname %1.</source>
        <translation>호스트 이름을 %1로 설정하는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="62"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="69"/>
        <source>Internal Error</source>
        <translation>내부 오류</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="76"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="87"/>
        <source>Cannot write hostname to target system</source>
        <translation>시스템의 호스트 이름을 저장할 수 없습니다</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>키보드 모델을 %1로 설정하고, 레이아웃을 %2-%3으로 설정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>가상 콘솔을 위한 키보드 설정을 저장할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="322"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="326"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="332"/>
        <source>Failed to write to %1</source>
        <translation>%1에 쓰기를 실패했습니다</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>X11에 대한 키보드 설정을 저장하지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>/etc/default 디렉터리에 키보드 설정을 저장하지 못했습니다.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on partition %1.</source>
        <translation>파티션 %1에 플래그를 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="52"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>%1MiB %2 파티션에 플래그 설정.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="56"/>
        <source>Set flags on new partition.</source>
        <translation>새 파티션에 플래그를 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>파티션 &lt;strong&gt;%1&lt;/strong&gt;에서 플래그를 지웁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; 파티션에서 플래그를 지웁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="85"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; 파티션을 &lt;strong&gt;%3&lt;/strong&gt;으로 플래그합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; 파티션에서 플래그를 지우는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; 파티션에서 플래그 &lt;strong&gt;%3&lt;/strong&gt;을 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>새 파티션에서 플래그를 지웁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="79"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>파티션 &lt;strong&gt;%1&lt;/strong&gt;을 &lt;strong&gt;%2&lt;/strong&gt;로 플래그 지정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation> 파티션을 &lt;strong&gt;%1&lt;/strong&gt;로 플래그 지정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="103"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>파티션 &lt;strong&gt;%1&lt;/strong&gt;에서 플래그를 지우는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="111"/>
        <source>Clearing flags on new partition.</source>
        <translation>새 파티션에서 플래그를 지우는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="115"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>파티션 &lt;strong&gt;%1&lt;/strong&gt;에 플래그를 .&lt;strong&gt;%2&lt;/strong&gt;로 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="127"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>새 파티션에서 플래그를 &lt;strong&gt;%1&lt;/strong&gt;으로 설정합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="144"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>설치 프로그램이 파티션 %1에서 플래그를 설정하지 못했습니다..</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="48"/>
        <source>Set password for user %1</source>
        <translation>%1 사용자에 대한 암호를 설정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="55"/>
        <source>Setting password for user %1.</source>
        <translation>%1 사용자의 암호를 설정하는 중입니다</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="112"/>
        <source>Bad destination system path.</source>
        <translation>잘못된 대상 시스템 경로입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="113"/>
        <source>rootMountPoint is %1</source>
        <translation>루트마운트위치는 %1입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="123"/>
        <source>Cannot disable root account.</source>
        <translation>root 계정을 비활성화 할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="124"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd가 %1 오류 코드로 종료되었습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="139"/>
        <source>Cannot set password for user %1.</source>
        <translation>%1 사용자에 대한 암호를 설정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="141"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod가 %1 오류 코드로 종료되었습니다</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>표준시간대를 %1/%2로 설정합니다</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>선택된 표준시간대 경로에 접근할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>잘못된 경로: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>표준 시간대를 설정할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>링크 생성 실패, 대상: %1; 링크 이름: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot set timezone,</source>
        <translation>표준시간대를 설정할 수 없습니다,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="97"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>/etc/timezone을 쓰기를 위해 열 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>ShellProcessJob</name>
    <message>
        <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="50"/>
        <source>Shell Processes Job</source>
        <translation>셸 처리 작업</translation>
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
        <translation>설치 절차를 시작하면 어떻게 되는지 간략히 설명합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="60"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>설치 절차를 시작하면 어떻게 되는지 간략히 설명합니다.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>요약</translation>
    </message>
</context>
<context>
    <name>TrackingInstallJob</name>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="43"/>
        <source>Installation feedback</source>
        <translation>설치 피드백</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="53"/>
        <source>Sending installation feedback.</source>
        <translation>설치 피드백을 보내는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="88"/>
        <source>Internal error in install-tracking.</source>
        <translation>설치 추적중 내부 오류</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="89"/>
        <source>HTTP request timed out.</source>
        <translation>HTTP 요청 시간이 만료되었습니다.</translation>
    </message>
</context>
<context>
    <name>TrackingMachineNeonJob</name>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="104"/>
        <source>Machine feedback</source>
        <translation>시스템 피드백</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="114"/>
        <source>Configuring machine feedback.</source>
        <translation>시스템 피드백을 설정하는 중입니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="133"/>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="136"/>
        <source>Error in machine feedback configuration.</source>
        <translation>시스템 피드백 설정 중에 오류가 발생했습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="134"/>
        <source>Could not configure machine feedback correctly, script error %1.</source>
        <translation>시스템 피드백을 정확하게 설정할 수 없습니다, %1 스크립트 오류.</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingJobs.cpp" line="137"/>
        <source>Could not configure machine feedback correctly, Calamares error %1.</source>
        <translation>시스템 피드백을 정확하게 설정할 수 없습니다, %1 깔라마레스 오류.</translation>
    </message>
</context>
<context>
    <name>TrackingPage</name>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="24"/>
        <source>Placeholder</source>
        <translation>자리 표시자</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="72"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By selecting this, you will send &lt;span style=&quot; font-weight:600;&quot;&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;이 옵션을 선택하면 &lt;span style=&quot; font-weight:600;&quot;&gt;설치에 대한 정보가&lt;/span&gt; 전혀 전송되지 않습니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/page_trackingstep.ui" line="271"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href=&quot;placeholder&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#2980b9;&quot;&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href=&quot;placeholder&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#2980b9;&quot;&gt;사용자 피드백에 대한 자세한 정보를 보려면 여기를 클릭하세요.&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="44"/>
        <source>Install tracking helps %1 to see how many users they have, what hardware they install %1 to and (with the last two options below), get continuous information about preferred applications. To see what will be sent, please click the help icon next to each area.</source>
        <translation>설치 추적 기능을 사용하면 %1의 사용자 수, %1에 설치하는 하드웨어 (아래 마지막 두 옵션), 기본 응용 프로그램에 대한 지속적인 정보를 얻을 수 있습니다. 전송할 내용을 보려면 각 영역 옆에있는 도움말 아이콘을 클릭하십시오.</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="45"/>
        <source>By selecting this you will send information about your installation and hardware. This information will &lt;b&gt;only be sent once&lt;/b&gt; after the installation finishes.</source>
        <translation>이 옵션을 선택하면 설치 및 하드웨어에 대한 정보가 전송됩니다. 이 정보는 설치가 완료된 후 &lt;b&gt;한 번만 전송&lt;/b&gt;됩니다</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="46"/>
        <source>By selecting this you will &lt;b&gt;periodically&lt;/b&gt; send information about your installation, hardware and applications, to %1.</source>
        <translation>이 옵션을 선택하면 &lt;b&gt;주기적으로&lt;/b&gt; 설치, 하드웨어 및 응용 프로그램에 대한 정보를 %1로 전송합니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/tracking/TrackingPage.cpp" line="47"/>
        <source>By selecting this you will &lt;b&gt;regularly&lt;/b&gt; send information about your installation, hardware, applications and usage patterns, to %1.</source>
        <translation>이 옵션을 선택하면 &lt;b&gt;정기적으로&lt;/b&gt; 설치, 하드웨어, 응용 프로그램 및 사용 패턴에 대한 정보를 %1로 전송합니다.</translation>
    </message>
</context>
<context>
    <name>TrackingViewStep</name>
    <message>
        <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="61"/>
        <source>Feedback</source>
        <translation>피드백</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="120"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;둘 이상의 사용자가 이 컴퓨터를 사용할 경우, 설정 후 계정을 여러 개 만들 수 있습니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="126"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;둘 이상의 사용자가 이 컴퓨터를 사용할 경우 설치 후 계정을 여러 개 만들 수 있습니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="317"/>
        <source>Your username is too long.</source>
        <translation>사용자 이름이 너무 깁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="323"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>사용자 이름이 유효하지 않은 문자들을 포함하고 있습니다. 소문자 그리고 숫자만이 허용됩니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="361"/>
        <source>Your hostname is too short.</source>
        <translation>호스트 이름이 너무 짧습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="367"/>
        <source>Your hostname is too long.</source>
        <translation>호스트 이름이 너무 깁니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="373"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>호스트명에 부적절한 문자가 포함되어 있습니다.알파벳, 숫자 및 하이푼만 사용할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="401"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="445"/>
        <source>Your passwords do not match!</source>
        <translation>암호가 일치하지 않습니다!</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="54"/>
        <source>Users</source>
        <translation>사용자</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="14"/>
        <source>Create Volume Group</source>
        <translation>볼륨 그룹 생성</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="20"/>
        <source>List of Physical Volumes</source>
        <translation>물리 볼륨 목록</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="30"/>
        <source>Volume Group Name:</source>
        <translation>볼륨 그룹 이름 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="43"/>
        <source>Volume Group Type:</source>
        <translation>볼륨 그룹 유형 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="56"/>
        <source>Physical Extent Size:</source>
        <translation>물리 확장 크기 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="66"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="82"/>
        <source>Total Size:</source>
        <translation>전체 크기 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="102"/>
        <source>Used Size:</source>
        <translation>사용된 크기 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="122"/>
        <source>Total Sectors:</source>
        <translation>전체 섹터 :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="142"/>
        <source>Quantity of LVs:</source>
        <translation>LVs의 용량</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>형식</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="160"/>
        <source>&amp;Release notes</source>
        <translation>출시 정보 (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="150"/>
        <source>&amp;Known issues</source>
        <translation>알려진 문제점 (&amp;K)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="17"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="72"/>
        <source>Select language</source>
        <translation>언어 선택</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
        <source>&amp;Support</source>
        <translation>지원 (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="130"/>
        <source>&amp;About</source>
        <translation>정보 (&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="76"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 설치 관리자에 오신 것을 환영합니다.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="75"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1을 위한 Calamares 설치 관리자에 오신 것을 환영합니다.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="71"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1에 대한 Calamares 설정 프로그램에 오신 것을 환영합니다.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="72"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 설치에 오신 것을 환영합니다.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="90"/>
        <source>About %1 setup</source>
        <translation>%1 설치 정보</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="91"/>
        <source>About %1 installer</source>
        <translation>%1 설치 관리자에 대하여</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="94"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/calamares/calamares/&quot;&gt;Calamares translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/team/&quot;&gt;Calamares&lt;/a&gt; 팀과 &lt;a href=&quot;https://www.transifex.com/calamares/calamares/&quot;&gt;Calamares 번역 팀&lt;/a&gt;에게 감사드립니다.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; 개발 후원 : &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="201"/>
        <source>%1 support</source>
        <translation>%1 지원</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="57"/>
        <source>Welcome</source>
        <translation>환영합니다</translation>
    </message>
</context>
</TS>
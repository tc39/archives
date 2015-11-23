(function() {

    window.PageHelper = {};

	window.TestConstants = {
		PAUSED : 'PAUSED',
		RUNNING : 'RUNNING',
		STOPPED : 'STOPPED',
		RESET : 'RESET',
		RESUME : 'RESUME'
	}
	
    //constants
    this.XML_SUBMITTER = 'Microsoft Test Team';
    this.XML_TARGETTESTSUITENAME = 'W3C HTML5 Test Suite Ver 1.0';
    this.XML_TARGETTESTSUITEID = 'W3CHTML5-10';

    var logger = null;
    var loggerParent = null;
    var progressBar = null;

    function $ERROR() {
        return false;
    }

    function getDomain() {
        return window.location.protocol + '//' + document.domain + '/';
    }

    function configureReportLink(executing) {
        var reportLink = $('.test-report-link');
        if (executing) {
            reportLink.attr('testRunning', 'true');
            reportLink.parent().attr('title', 'Please wait till the test run is completed or stop the test run before viewing the report.');
        } else {
            reportLink.parent().attr('title', '');
            reportLink.attr('testRunning', 'false');
        }
    }

    function init() {
        $('.content-home').show();

        logger = $('#tableLogger');
        loggerParent = logger.parent();
        progressBar = $('#progressbar');

        $('.nav-link').each(function(index) {
            if (index === 0) {
                $(this).attr('targetDiv', '.content-home');
            } else if (index === 1) {
                $(this).attr('targetDiv', '.content-tests');
            } else if (index === 2) {
                $(this).attr('targetDiv', '.content-results');
                $(this).attr('testRunning', 'false');
            }
            else {
                $(this).attr('targetDiv', '.content-dev');
            }



            $(this).click(function() {
                var target = $(this).attr('targetDiv');
                //Report page call here
                if ($(target).hasClass('content-results')) {
                    if ($(this).attr('testRunning') === 'true') { return; }
                    generateReportTable();
                }
                $('#contentContainer > div:visible').hide();
                $('.NavBar .selected').toggleClass('selected');
                $(this).addClass('selected');
                $(target).show();
            });
        }
        );

        //attach the start button event
        $('.button-start').click(function() {
            $('#testsToRun').text(ES5Harness.getTotalTestsToRun());
            $('#totalCounter').text(0);
            $('Pass').text(0);
            $('Fail').text(0);
            $('#totalFailedCounter').text(0);

			var testStatus = $(this).data('testStatus');
			
			switch(testStatus) {
			case undefined:
			case TestConstants.STOPPED : 
				ES5Harness.stop(TestConstants.STOPPED);
                logger.find('tr').remove();
				$(this).data('testStatus', TestConstants.RUNNING);
                ES5Harness.startTesting(update,  TestConstants.RESET);
                $(this).attr('src', 'resources/images/pause.png');
				configureReportLink(true);	
				break;
			case TestConstants.RUNNING :
				$(this).data('testStatus', TestConstants.PAUSED);
				ES5Harness.stop(TestConstants.PAUSED);
                $(this).attr('src', 'resources/images/resume.png');
				configureReportLink(false);
				break;
			case TestConstants.PAUSED :
				$(this).data('testStatus', TestConstants.RUNNING);
				$(this).attr('src', 'resources/images/pause.png');
				ES5Harness.startTesting(update,  TestConstants.RESUME);
				configureReportLink(true);
				break;
			}
        });

        //attach the start button event
        $('.button-reset').click(function () {
			configureReportLink(false);
            $('.button-start').data('testStatus', TestConstants.STOPPED).attr('src', 'resources/images/start.png');;
            logger.find('tr').remove();
            ES5Harness.stop(TestConstants.RESET);
		$('#failedToLoadCounter').text(0);
		$('#totalFailedCounter').text(0);
                   });

        $('#ancGenXMLReport').click(function(e) {
            //e.preventDefault();
            generateReportXml();
            return false;
        });

        //delete all the below lines later
        //$('#btnSetTimerValue').click(function(){
        // ES5Harness.TIMER_PERIOD = parseInt($('#txtTimerValue').val());
        //})
		
		//load xml testcase path list
		ES5Harness && ES5Harness.loadTestList();
    }

    function update(detailsObj) {
        if (!isNaN(detailsObj.totalTestsRun)) {
            $('#totalCounter').text(detailsObj.totalTestsRun);
        }
        if (detailsObj.completed) {
            var btnStart = $('#btnStart').attr('src', 'resources/images/start.png');
			btnStart.data('testStatus', TestConstants.STOPPED);
			$('#totalFailedCounter').text(ES5Harness.getTotalTestsToRun() - ES5Harness.getTotalTestsRun());
			configureReportLink(false);
		}
        
        $('#Pass').text(detailsObj.totalTestsPassed);
        $('#Fail').text(detailsObj.totalTestsFailed);
		//$('#totalLoadedCounter').text(detailsObj.totalTestsLoaded);
		
        if (detailsObj.failedTestCases && detailsObj.failedTestCases.length > 0) {
            
            var length = detailsObj.failedTestCases.length;
			var testObj;
            var altStyle;
            var appendStr = '';
            while (length--) {
                altStyle = (logger.children().length % 2) === 0 ? ' ' : 'Alternate';
                testObj = detailsObj.failedTestCases.shift();
                appendStr += '<tbody><tr class=\"' + altStyle + '\"><td width=\"15%\">' + testObj.id + '</td><td>' + testObj.description + '</td><td align="right"><span class=\"Fail\">Fail</span></td></tr></tbody>';
                
            }
            logger.append(appendStr);
        }
        loggerParent.attr({ scrollTop: loggerParent.attr("scrollHeight") });
        progressBar.reportprogress(detailsObj.totalTestsRun, detailsObj.totalTestCasesForProgressBar);
    }

    function generateReportXml() {

        var reportWindow, //window that will output the xml data
			tests,       //reference to the tests array which holds the entire set of tests
			xmlData,      //array instead of string concatenation
			testsLength,
			dateNow,
			xml;  // stop condition of for loop stored in a local variable to improve performance

        tests = ES5Harness.getAllTests(); //get a reference to all tests array from sth.js
        dateNow = new Date();
        testsLength = tests.length;

        xml = '<testRun><userAgent>' + $.browser.version + '</userAgent>\
			<browserName>' + navigator.userAgent + '</browserName>\
			<Date>' + dateNow.toString() + '</Date>\
			<Submitter>' + this.XML_SUBMITTER + '</Submitter>\
			<targetTestSuiteName>' + this.XML_TARGETTESTSUITENAME + '</targetTestSuiteName>\
			<targetTestSuiteID>' + this.XML_TARGETTESTSUITEID + '</targetTestSuiteID>\
			<Tests>';

        reportWindow = window.open('reportxml.html');
        reportWindow.document.write(xml);

        for (var index = 0; index < testsLength; index++) {
            xml = '<test><featureName>canvas</featureName>\
			<testName>' + htmlEscape(tests[index].description) + '</testName>\
			<specReference>' + tests[index].id + '</specReference>\
			<Result>' + tests[index].res + '</Result>\
			<resultReason></resultReason></test>';
            reportWindow.document.write(xml);
        }
        reportWindow.document.write('</Tests></testRun>');
        reportWindow.document.close();
    }

    function htmlEscape(str) {
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function numTests(section) {
        nTest = 0;
        for (var subSectionIndex = 0; subSectionIndex < section.subSections.length; subSectionIndex++) {
            if (section.subSections[subSectionIndex].total != 0) {
                nTest++;
            }
        }
        return nTest;
    }
    function generateReportTable() {
        var bResultsdisplayed = false;

        $('#backlinkDiv').hide();
        //define local scope to sections array
        var sections = window.sections;
        var dataTable = $('.results-data-table');
        $('.results-data-table').find("tr").remove();
        //set the total, pass and fail count
        $('.totalCases').text(ES5Harness.getTotalTestsRun());
        $('.passedCases').text(ES5Harness.getTotalTestsPassed());
        $('.failedCases').text(ES5Harness.getTotalTestsFailed());
        $('#failedToLoadCounter').text(ES5Harness.getTotalTestsRun() == 0 ? 0 : ES5Harness.getTotalTestsToRun() - ES5Harness.getTotalTestsRun());
        $('.Crumbs #link1').remove();
        $('.Crumbs #link2').remove();
        $('.Crumbs #link3').remove();
        //set the navigation bar
        var anc1 = $('<a id="link1">Test Report ></a>');
        anc1.attr('href', 'javascript:PageHelper.generateReportTable();');
        $('.Crumbs').append(anc1);
        $('.Crumbs #link1').removeClass().addClass("setBlack");
        var totalSubSectionPassed = 0;
        for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
            if (numTests(sections[sectionIndex]) != 0) {
                bResultsdisplayed = true;
                dataTable.append('<tbody><tr><td class="tblHeader" colspan="2">' + 'Chapter ' + sections[sectionIndex].id + '- ' + sections[sectionIndex].name + '</td></tr></tbody>');
                var mainSectionPercentageStyle = "ReportRed";
                // if there are any cases directly inside the chapter instead of in subsections
                if (sections[sectionIndex].testCaseArray.length > 0) {
                    for (var index = 0; index < sections[sectionIndex].subSections.length; index++) {
                        totalSubSectionPassed = totalSubSectionPassed + sections[sectionIndex].subSections[index].passed;
                    }

                    if (Math.round((sections[sectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].testCaseArray.length * 100) >= 80)
                        mainSectionPercentageStyle = "ReportGreen";
                    else if (Math.round((sections[sectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].testCaseArray.length * 100) >= 48)
                        mainSectionPercentageStyle = "ReportYellow";
                    else
                        mainSectionPercentageStyle = "ReportRed";

                    dataTable.append('<tbody><tr><td><a href="javascript:PageHelper.generateDetailedReportTable(' + sectionIndex + ',-1);">' + "In Chapter " + sections[sectionIndex].id + '</a></td><td class="' + mainSectionPercentageStyle + '">' + (Math.round((sections[sectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].testCaseArray.length * 100)) + '%' + '</td></tr></tbody>');
                }
            }

            for (var subSectionIndex = 0; subSectionIndex < sections[sectionIndex].subSections.length; subSectionIndex++) {
                var styleClass;
                if (sections[sectionIndex].subSections[subSectionIndex].total != 0) {
                    if (sections[sectionIndex].subSections[subSectionIndex].getPassPercentage() >= 80) {
                        styleClass = "ReportGreen";
                    }
                    else if (sections[sectionIndex].subSections[subSectionIndex].getPassPercentage() >= 48) {
                        styleClass = "ReportYellow";
                    }
                    else {
                        styleClass = "ReportRed";
                    }

                    dataTable.append('<tbody><tr><td class="sectionName"><a href="javascript:PageHelper.generateSubSectionReportTable(' + sectionIndex + ',' + subSectionIndex + ');">' + sections[sectionIndex].subSections[subSectionIndex].name + '</a></td><td class="' + styleClass + '">' + sections[sectionIndex].subSections[subSectionIndex].getPassPercentage() + '%' + '</td></tr></tbody>');
                    bResultsdisplayed = true;
                }
            }

            totalSubSectionPassed = 0;

        }
        // append the legend if results have been displayed
        if (bResultsdisplayed)
            $('#legend').show();
    }

    function generateSubSectionReportTable(sectionIndex, subSectionIndex) {
        var sections = window.sections;
        var dataTable = $('.results-data-table');
        $('.results-data-table').find("tr").remove();

        var styleClass;
        var totalSubSectionPassed = 0;


        // if there is no subsections under a section(say 7.1) then directly display the detailed test report
        if (!sections[sectionIndex].subSections[subSectionIndex].subSections)
            generateDetailedReportTable(sectionIndex, subSectionIndex);
        else {

            $('.Crumbs #link2').remove();
            var anc2 = $('<a id="link2">' + " Chapter " + sections[sectionIndex].id + ": " + sections[sectionIndex].name + ": " + sections[sectionIndex].subSections[subSectionIndex].name + " > " + '</a>');
            anc2.attr('href', 'javascript:PageHelper.generateSubSectionReportTable(' + sectionIndex + ',' + subSectionIndex + ');');
            $('.Crumbs').append(anc2);

            $('.Crumbs #link2').removeClass().addClass("setBlack");
            $('.Crumbs #link1').removeClass().addClass("setBlue");

            var anc = $('.Crumbs').find('a');
            anc.click(function() {
                $(this).next('a').remove();

            });
            $('.Crumbs #link3').remove();

            $('.totalCases').text(sections[sectionIndex].subSections[subSectionIndex].total);
            $('.passedCases').text(sections[sectionIndex].subSections[subSectionIndex].passed);
            $('.failedCases').text(sections[sectionIndex].subSections[subSectionIndex].failed);

            for (var index = 0; index < sections[sectionIndex].subSections[subSectionIndex].subSections.length; index++) {
                totalSubSectionPassed = totalSubSectionPassed + sections[sectionIndex].subSections[subSectionIndex].subSections[index].passed;
            }

            if (sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length > 0) {

                if (Math.round((sections[sectionIndex].subSections[subSectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length * 100) >= 80) {
                    styleClass = "ReportGreen";
                }

                else if (Math.round((sections[sectionIndex].subSections[subSectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length * 100) >= 48) {
                    styleClass = "ReportYellow";
                }

                else {
                    styleClass = "ReportRed";
                }

                dataTable.append('<tr><td class="tblSectionHeader"><a href="javascript:PageHelper.generateDetailedReportTable(' + sectionIndex + ',' + subSectionIndex + ');">' + "Section: " + sections[sectionIndex].subSections[subSectionIndex].id + " cases" + '</a></td><td class="' + styleClass + '">' + Math.round((sections[sectionIndex].subSections[subSectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length * 100) + '%' + '</td></tr>');
            }

            if (sections[sectionIndex].subSections[subSectionIndex].subSections) {

                for (var objIndex = 0; objIndex < sections[sectionIndex].subSections[subSectionIndex].subSections.length; objIndex++) {
                    if (sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].total != 0) {

                        if (sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].getPassPercentage() >= 80) {
                            styleClass = "ReportGreen";
                        }
                        else if (sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].getPassPercentage() >= 48) {
                            styleClass = "ReportYellow";
                        }
                        else {
                            styleClass = "ReportRed";
                        }

                        dataTable.append('<tr><td class="tblSectionHeader"><a href="javascript:PageHelper.generateDetailedReportTable(' + sectionIndex + ',' + subSectionIndex + ',' + objIndex + ');">' + sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].name + '</a></td><td class="' + styleClass + '">' + sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].getPassPercentage() + '%' + '</td></tr>');
                    }
                }
            }
        }

        doBackButtonTasks();
    }

    function doBackButtonTasks() {
        $('#backlinkDiv').show();
        var anchors = $('.Crumbs a');
        var contextAnchor = anchors[anchors.length - 2];

        $('#backlinkDiv').attr('href', contextAnchor.href);
    }

    function generateDetailedReportTable(sectionIndex, subSectionIndex, subInnerSectionIndex) {
        var sections = window.sections;
        var dataTable = $('.results-data-table');

        $('.results-data-table').find("tr").remove();
        var mainSectionPassed = 0;
        var mainSectionfailed = 0;

        var subSectionPassed = 0;
        var subSectionfailed = 0;

        var resultStyle = "pass";
        var subSectionObj;
        // sub sections
        if (subSectionIndex != -1) {
            // if there is only one level of subsections example: 7.1
            if (!sections[sectionIndex].subSections[subSectionIndex].subSections) {
                subSectionObj = sections[sectionIndex].subSections[subSectionIndex];

                $('.totalCases').text(subSectionObj.total);
                $('.passedCases').text(subSectionObj.passed);
                $('.failedCases').text(subSectionObj.failed);

            }
            // cases directly under sub-subsections example: 7.1.1
            else if (sections[sectionIndex].subSections[subSectionIndex].subSections.length > 0 && subInnerSectionIndex !== undefined) {

                subSectionObj = sections[sectionIndex].subSections[subSectionIndex].subSections[subInnerSectionIndex];
                $('.sectionId').text("section: " + subSectionObj.id);
                $('.totalCases').text(subSectionObj.total);
                $('.passedCases').text(subSectionObj.passed);
                $('.failedCases').text(subSectionObj.failed);
            }
            // cases directly under subsections example: 7.1 
            else if (sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length > 0) {
                subSectionObj = sections[sectionIndex].subSections[subSectionIndex];
                for (var index = 0; index < sections[sectionIndex].subSections[subSectionIndex].subSections.length; index++) {
                    subSectionPassed = subSectionPassed + sections[sectionIndex].subSections[subSectionIndex].subSections[index].passed;
                    subSectionfailed = subSectionfailed + sections[sectionIndex].subSections[subSectionIndex].subSections[index].failed;
                }

                $('.totalCases').text(subSectionObj.testCaseArray.length);
                $('.passedCases').text(subSectionObj.passed - subSectionPassed);
                $('.failedCases').text(subSectionObj.failed - subSectionfailed);
            }



            // $('#backlinkDiv').remove();
            var anc3 = $('<a id="link3">' + " Section: " + subSectionObj.id + " " + subSectionObj.name + '</a>');
            $('.Crumbs').append(anc3);
            $('.Crumbs #link3').removeClass().addClass("setBlack");
            $('.Crumbs #link2').removeClass().addClass("setBlue");
            $('.Crumbs #link1').removeClass().addClass("setBlue");


            for (var objIndex = 0; objIndex < subSectionObj.testCaseArray.length; objIndex++) {
                if (subSectionObj.testCaseArray[objIndex].res.toLowerCase() == 'pass')
                    resultStyle = "Pass";
                else
                    resultStyle = "Fail";
                var path = subSectionObj.testCaseArray[objIndex].path.indexOf('resources/') == -1 ? 'resources/scripts/' + subSectionObj.testCaseArray[objIndex].path : subSectionObj.testCaseArray[objIndex].path;
                dataTable.append('<tbody><tr><td>' + subSectionObj.testCaseArray[objIndex].id + '</td><td>' + subSectionObj.testCaseArray[objIndex].description + '</td><td class="' + resultStyle + '">' + subSectionObj.testCaseArray[objIndex].res + '</td><td><a href="javascript:ES5Harness.openSourceWindow(' + subSectionObj.testCaseArray[objIndex].registrationIndex + ');">[source]</a></td></tr></tbody>');
            }

        }

        // testcases directly under a chapter when there are no sections in a chapter
        else {
            var anc3 = $('<a id="link3">' + " Chapter: " + sections[sectionIndex].id + ": " + sections[sectionIndex].name + '</a>');
            $('.Crumbs').append(anc3);

            $('.Crumbs #link3').removeClass().addClass("setBlack");
            $('.Crumbs #link2').removeClass().addClass("setBlue");
            $('.Crumbs #link1').removeClass().addClass("setBlue");

            $('.sectionId').text("section: " + sections[sectionIndex].id);
            for (var subSectionIndex = 0; subSectionIndex < sections[sectionIndex].subSections.length; subSectionIndex++) {
                mainSectionPassed = mainSectionPassed + sections[sectionIndex].subSections[subSectionIndex].passed;
                mainSectionfailed = mainSectionfailed + sections[sectionIndex].subSections[subSectionIndex].failed;
            }
            $('.totalCases').text(sections[sectionIndex].testCaseArray.length);
            $('.passedCases').text(sections[sectionIndex].passed - mainSectionPassed);
            $('.failedCases').text(sections[sectionIndex].failed - mainSectionfailed);

            $('.detailedResult').text("Total tests: " + sections[sectionIndex].testCaseArray.length + " Passed: " + (sections[sectionIndex].passed - mainSectionPassed) + " Failed: " + (sections[sectionIndex].failed - mainSectionfailed));
            for (var arrayIndex = 0; arrayIndex < sections[sectionIndex].testCaseArray.length; arrayIndex++) {
                if (sections[sectionIndex].testCaseArray[arrayIndex].res.toLowerCase() == 'pass')
                    resultStyle = "Pass";
                else
                    resultStyle = "Fail";
                var path = sections[sectionIndex].testCaseArray[arrayIndex].path.indexOf('resources/') == -1 ? 'resources/scripts/' + sections[sectionIndex].testCaseArray[arrayIndex].path : sections[sectionIndex].testCaseArray[arrayIndex].path;
                dataTable.append('<tbody><tr><td>' + sections[sectionIndex].testCaseArray[arrayIndex].id + '</td><td>' + sections[sectionIndex].testCaseArray[arrayIndex].description + '</td><td class="' + resultStyle + '">' + sections[sectionIndex].testCaseArray[arrayIndex].res + '</td><td><a href="javascript:ES5Harness.openSourceWindow(' + sections[sectionIndex].testCaseArray[arrayIndex].registrationIndex + ');">[source]</a></td></tr></tbody>');
            }
        }

        doBackButtonTasks();
    }

    //Register the variables in the namespce
    window.PageHelper.init = init;
    window.$ERROR = $ERROR;
    window.PageHelper.generateReportXml = generateReportXml;
    window.PageHelper.generateDetailedReportTable = generateDetailedReportTable;
    //window.PageHelper.logger = this.logger;
    //window.PageHelper.loggerParent = this.loggerParent;
    window.PageHelper.generateSubSectionReportTable = generateSubSectionReportTable;
    window.PageHelper.generateReportTable = generateReportTable;
    window.PageHelper.progressBar = this.progressBar;
})()


$(window).ready(function(){
	PageHelper.init();
});

//Extend the array type
Array.prototype.getCloneOfObject = function(oldObject) {
        var tempClone = {};

        if (typeof(oldObject) === "object")
            for (prop in oldObject)
                if ((typeof(oldObject[prop]) === "object") &&
                                (oldObject[prop]).__isArray)
                    tempClone[prop] = this.getCloneOfArray(oldObject[prop]);
                else if (typeof(oldObject[prop]) === "object")
                    tempClone[prop] = this.getCloneOfObject(oldObject[prop]);
                else
                    tempClone[prop] = oldObject[prop];

        return tempClone;
    }

Array.prototype.clone = function() {
        var tempClone = [];

        for (var arrIndex = 0; arrIndex <= this.length; arrIndex++)
            if (typeof(this[arrIndex]) === "object") {
                tempClone.push(this.getCloneOfObject(this[arrIndex]));
			} else {
                tempClone.push(this[arrIndex]);
			}
        return tempClone;
}


'use strict';

var elements = document.getElementsByTagName('*');
var elements = document.getElementsByTagName('*');
var replace = ["[ז]", "[נ]", "", ""];
var replaceto = ["", "", "", ""];
var pfpsrc;
var c1 = "#106030";
var c2 = "#ffffff";
var c1bbb = "";
var c2bbb = "";
var calc2 = false;
var customCssWeb = "";
var customCssBbb = "";
var rmsfmImg1 = "";

function start() {
    for (var k = 0; k < replace.length; k++) {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            a(element, k);
        }
    }
    setTimeout(start, 1);
}

var nametag = false;
var nametagt = 0;
function a(element, k) {
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(replace[k], replaceto[k], "gi");
            if (!nametag && (location.href.includes("bbb") || location.href.includes("bigbluebutton")) && replace[3] != "") {
                try {
                    document.getElementsByClassName("content--6H8et")[0].innerHTML = replaceto[3].substring(0, 2);
                    nametag = true;
                } catch (e) {}
                nametagt++;
            }

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        } else {
            a(node, k);
        }
    }
}

var started = false;
try {
    start();
    started = true;
} catch (e) {}

window.addEventListener('load', function () {
    chrome.storage.local.get(function (data) {
        if (data.zn == false) {
            replace[0] = "";
            replace[1] = "";
        } else {
            replace[0] = "[ז]";
            replace[1] = "[נ]";
        }
        if (data.znr != undefined) {
            replaceto[0] = data.znr;
            replaceto[1] = data.znr;
        }
        if (data.fn != undefined) {
            replace[2] = data.fn;
        }
        if (data.ln != undefined) {
            replace[3] = data.ln;
        }
        if (data.afn != undefined) {
            replaceto[2] = data.afn;
        }
        if (data.aln != undefined) {
            replaceto[3] = data.aln;
        }
        if (data.rep != undefined) {
            var repl = replace.length;
            var drepl = data.rep.length;
            var j = 0;
            for (var i = repl; i < repl + drepl; i++) {
                replace[i] = data.rep[j][0];
                replaceto[i] = data.rep[j][1];
                j++;
            }
        }
        for (var i = 2; i < replace.length; i++) {
            if (replaceto[i].includes(replace[i]) && replaceto[i] != "") {
                replaceto[i] = replaceto[i].charAt(0) + "​" + replaceto[i].substring(1, replaceto[i].length);
            }
        }
        if (data.c1 != undefined) {
            c1 = data.c1;
        }
        if (data.calc2 != undefined) {
            calc2 = data.calc2;
        }
        if (data.cssWeb != undefined) {
            customCssWeb = data.cssWeb + "\n";
        }
        if (data.cssBbb != undefined) {
            customCssBbb = data.cssBbb + "\n";
        }
        if (data.previewCssWeb != undefined && data.previewCssWeb != "") {
            customCssWeb = data.previewCssWeb + "\n";
        }
        if (data.previewCssBbb != undefined && data.previewCssBbb != "") {
            customCssBbb = data.previewCssBbb + "\n";
        }
        if (data.rmsfmImg1 != undefined) {
            rmsfmImg1 = data.rmsfmImg1;
        }
        if (data.previewRmsfmImg1 != undefined && data.previewRmsfmImg1 != "") {
            rmsfmImg1 = data.previewRmsfmImg1;
        }
        if (data.c2 != undefined) {
            c2 = data.c2;
            if (calc2) {
                calculateC2();
            }
            if (customCssBbb.split('\n')[0].includes("color1:")) {
                c1bbb = customCssBbb.split('\n')[0].replace("color1: ", "").replace("color1:", "");
                customCssBbb = customCssBbb.replace(customCssBbb.split('\n')[0], "");
            } else {
                c1bbb = c1;
            }
            if (customCssBbb.split('\n')[1].includes("color2:")) {
                c2bbb = customCssBbb.split('\n')[1].replace("color2: ", "").replace("color2:", "");
                customCssBbb = customCssBbb.replace(customCssBbb.split('\n')[1], "");
            } else {
                c2bbb = c2;
            }
            if (customCssWeb.split('\n')[0].includes("color1:")) {
                c1 = customCssWeb.split('\n')[0].replace("color1: ", "").replace("color1:", "");
                customCssWeb = customCssWeb.replace(customCssWeb.split('\n')[0], "");
            }
            if (customCssWeb.split('\n')[1].includes("color2:")) {
                c2 = customCssWeb.split('\n')[1].replace("color2: ", "").replace("color2:", "");
                customCssWeb = customCssWeb.replace(customCssWeb.split('\n')[1], "");
            }
            if (location.href.includes("web.mashov") || location.href.includes("moodle.mashov")) {
                var c2s = document.createElement("style");
                c2s.innerHTML = customCssWeb + '\n:root{--rmsfmImg1: url(' + rmsfmImg1 + ')} body{background-color: ' + c2 + '} .mat-toolbar, .bg-dark, .mshv-primary:not(:disabled), .mat-raised-button.mat-primary{background-color: ' + c1 + ' !important;} .mshv-menu-schoolname, .mat-button-toggle{background-color: ' + c2 + ' !important;} .mshv-menu-schoolname div{color: ' + c1 + ' !important;} .mat-card, .mat-drawer-content, .mat-sidenav-content, mshv-menu-schoolname ng-tns-c393-1, #nav-drawer{background-color: ' + c2 + ';}  .dashboard-body, .dashboard-access-item{background-color: ' + c2 + ' !important;} .mat-drawer-inner-container{background-color: ' + c2 + ';} .ng-tns-c393-1{color: ' + c1 + ';} .mshv-menu-item{color: ' + c1 + ';} .mshv-covid:not(:hover), .mshv-bbb:not(:hover), .mshv-menu-selected:not(:hover), .active_tree_node, .mshv-menu-label, .bg-gray{background-color: ' + c1 + ' !important; color: white !important;} .active_tree_node{border: 0;} .mshv-menu-selected:hover{background-color: ' + c2 + ' !important;} .mshv-covid:not(:hover) span, .mshv-bbb:not(:hover) span, .mshv-menu-selected:not(:hover) span, .mshv-menu-selected:not(:hover) svg, .mat-button-toggle-checked:not(:hover) .mshv-menu-item{color: white !important;} ::-webkit-scrollbar {width: 5px;} ::-webkit-scrollbar-track {background: ' + c2 + ';} ::-webkit-scrollbar-thumb {background: ' + c1 + ';} ::selection{ background: ' + c1 + '; color: white;} ::-moz-selection{ background: ' + c1 + '; color: white;}';
                document.body.appendChild(c2s);
                try {
                    document.getElementsByName("theme-color")[0].content = c1;
                    document.getElementsByName("apple-mobile-web-app-status-bar-style")[0].content = c1;
                    document.getElementsByName("msapplication-navbutton-color")[0].content = c1;
                } catch (e) {}
            } else if (location.href.includes("bbb") || location.href.includes("bigbluebutton") && location.href.includes("html5client")) {
                var c2s = document.createElement("style");
                c2s.innerHTML = customCssBbb + '\n:root{--rmsfmImg1: url(' + rmsfmImg1 + ')} .circle--Z2c8umk:not(.md--Q7ug4){border: 0; box-shadow: none !important;} .primary--1IbqAO:not(.optionsButton--ZcRNoL):not(.icon-bbb-more){background-color: ' + colorBrightness(c1bbb, 20) + ' !important; color: white; !important; box-shadow: none !important;} .notificationsBar--ZrXHnR{background-color: ' + c1bbb + ' !important; color: white; !important;} body{background-color: ' + colorBrightness(c1bbb, -60) + ' !important;} ::selection{ background: ' + c1bbb + '; color: white;} ::-moz-selection{ background: ' + c1bbb + '; color: white;} .talker--2eNUIW{border: 0 !important;}';
                document.body.appendChild(c2s);
                try {
                    document.getElementsByName("theme-color")[0].content = c1;
                    document.getElementsByName("apple-mobile-web-app-status-bar-style")[0].content = c1;
                    document.getElementsByName("msapplication-navbutton-color")[0].content = c1;
                } catch (e) {}
            }
        }
        if (data.pfp != undefined) {
            var pfp;
            pfpsrc = data.pfp;
            if (pfpsrc != "nope" && (location.href.includes("web.mashov") || location.href.includes("moodle.mashov"))) {
                if (location.href.includes("web.mashov")) {
                    pfp = "mshv-student-thumbnail";
                } else if (location.href.includes("moodle.mashov")) {
                    pfp = "userpicture defaultuserpic";
                }
                var pfpScript = document.createElement("script");
                pfpScript.defer = "";
                pfpScript.innerHTML = 'setInterval(changepfp, 1000); changepfp(); function changepfp(){if(document.getElementsByClassName("' + pfp + '")[0].src != "' + pfpsrc + '")for(var i = 0; i < document.getElementsByClassName("' + pfp + '").length; i++){document.getElementsByClassName("' + pfp + '")[i].src = "' + pfpsrc + '";}}';
                document.body.appendChild(pfpScript);
            }
        }
    });
    if (!started) {
        start();
    }
});

function colorBrightness(hex, level) {
    hex = hex.replace("#", "");
    var rgb = hexToRgb(hex);
    return "rgb(" + parseInt(rgb.r + (level / 100) * rgb.r) + ", " + parseInt(rgb.g + (level / 100) * rgb.g) + ", " + parseInt(rgb.b + (level / 100) * rgb.b) + ")";
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }
     : null;
}

function calculateC2() {
    var level1 = 15;
    var white = 85;
    var rgb = hexToRgb(c1);
    c2 = "rgb(" + parseInt((level1 / 100) * rgb.r + (white / 100) * 255) + ", " + parseInt((level1 / 100) * rgb.g + (white / 100) * 255) + ", " + parseInt((level1 / 100) * rgb.b +  + (white / 100) * 255) + ")";
    return c2;
}

if (window.location.href.includes("/rmsfmTemplates")) {
    applyTemplate();
}
function applyTemplate() {
    var rmsfmPreview = document.createElement("div");
    rmsfmPreview.id = "rmsfmPreview";
    var previewBtn = document.createElement("button");
    previewBtn.id = "startTemplatePreview";
    previewBtn.innerHTML = "Preview";
    var setBtn = document.createElement("button");
    setBtn.id = "setTemplate";
    setBtn.innerHTML = "Set as CSS";
    rmsfmPreview.appendChild(previewBtn);
    rmsfmPreview.appendChild(setBtn);
    document.body.appendChild(rmsfmPreview);
    previewBtn.addEventListener('click', function () {
        try {
            var previewCssWeb = document.getElementById("rmsfmPreviewCssWeb").value;
            if (previewCssWeb != "") {
                chrome.storage.local.set({
                    previewCssWeb: previewCssWeb
                }, function () {})
            }
        } catch (e) {}
        try {
            var previewCssBbb = document.getElementById("rmsfmPreviewCssBbb").value;
            if (previewCssBbb != "") {
                chrome.storage.local.set({
                    previewCssBbb: previewCssBbb
                }, function () {})
            }
        } catch (e) {}
        try {
            var previewRmsfmImg1 = document.getElementById("rmsfmPreviewImg1").src;
            chrome.storage.local.set({
                previewRmsfmImg1: previewRmsfmImg1
            }, function () {})
        } catch (e) {}
        window.open("https://web.mashov.info/students/");
    });
    setBtn.addEventListener('click', function () {
        try {
            customCssWeb = document.getElementById("rmsfmPreviewCssWeb").value;
            if (customCssWeb != "") {
                chrome.storage.local.set({
                    cssWeb: customCssWeb
                }, function () {})
            }
        } catch (e) {}
        try {
            customCssBbb = document.getElementById("rmsfmPreviewCssBbb").value;
            if (customCssBbb != "") {
                chrome.storage.local.set({
                    cssBbb: customCssBbb
                }, function () {})
            }
        } catch (e) {}
        try {
            rmsfmImg1 = document.getElementById("rmsfmPreviewImg1").src;
            chrome.storage.local.set({
                rmsfmImg1: rmsfmImg1
            }, function () {})
        } catch (e) {}
        var previewCssWeb = "";
        var previewCssBbb = "";
        var previewRmsfmImg1 = "";
        chrome.storage.local.set({
            previewCssWeb: previewCssWeb,
            previewCssBbb: previewCssBbb,
            previewRmsfmImg1: previewRmsfmImg1
        }, function () {
            document.getElementById("refresh").style.display = "unset";
        })
        if (confirm("done.\nopen Mashov?")) {
            window.open("https://web.mashov.info/students/");
        }
    });
}

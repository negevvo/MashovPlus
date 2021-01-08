'use strict';

var pfpsrc = "nope";
var rmsfmImg1 = "";
var previewCssWeb = "";
var previewCssBbb = "";
var previewRmsfmImg1 = "";
chrome.storage.local.get(function (data) {
    if (data.zn != undefined) {
        document.getElementById("removezn").checked = data.zn;
        znCheck();
    } else {
        document.getElementById("removezn").checked = true;
        var znv = document.getElementById("removezn").checked;
        var znr = document.getElementById("znrep").value;
        var fn = document.getElementById("fname").value;
        var ln = document.getElementById("lname").value;
        var afn = document.getElementById("afname").value;
        var aln = document.getElementById("alname").value;
        var c1 = document.getElementById("color1").value;
        var c2 = document.getElementById("color2").value;
        var calc2 = document.getElementById("calc2").checked;
        var customCssWeb = document.getElementById("cssToAddWeb").value;
        var customCssBbb = document.getElementById("cssToAddBbb").value;
        saverepvals();
        chrome.storage.local.set({
            zn: znv,
            znr: znr,
            fn: fn,
            ln: ln,
            afn: afn,
            aln: aln,
            pfp: pfpsrc,
            c1: c1,
            c2: c2,
            calc2: calc2,
            rep: repvals,
            cssWeb: customCssWeb,
            cssBbb: customCssBbb,
            rmsfmImg1: rmsfmImg1
        }, function () {})
    }
    if (data.znr != undefined) {
        document.getElementById("znrep").value = data.znr;
    }
    if (data.fn != undefined) {
        document.getElementById("fname").value = data.fn;
    }
    if (data.ln != undefined) {
        document.getElementById("lname").value = data.ln;
    }
    if (data.afn != undefined) {
        document.getElementById("afname").value = data.afn;
    }
    if (data.aln != undefined) {
        document.getElementById("alname").value = data.aln;
    }
    if (data.pfp != undefined && data.pfp != "nope") {
        pfpsrc = data.pfp;
        document.getElementById("removepfp").style.display = "unset";
    }
    if (data.c1 != undefined) {
        document.getElementById("color1").value = data.c1;
    }
    if (data.c2 != undefined) {
        document.getElementById("color2").value = data.c2;
    }
    if (data.calc2 != undefined) {
        document.getElementById("calc2").checked = data.calc2;
        calc2Check();
    }
    if (data.rep != undefined) {
        repvals = data.rep;
        getrepinps();
    }
    if (data.cssWeb != undefined) {
        document.getElementById("cssToAddWeb").value = data.cssWeb;
    }
    if (data.cssBbb != undefined) {
        document.getElementById("cssToAddBbb").value = data.cssBbb;
    }
    if (data.previewCssWeb != undefined) {
        previewCssWeb = data.previewCssWeb;
    }
    if (data.previewCssBbb != undefined) {
        previewCssBbb = data.previewCssBbb;
    }
    if (data.previewRmsfmImg1 != undefined) {
        previewRmsfmImg1 = data.previewRmsfmImg1;
    }
    if ((previewCssWeb != "" && previewCssWeb != undefined) || (previewCssBbb != "" && previewCssBbb != undefined) || (previewRmsfmImg1 != "" && previewRmsfmImg1 != undefined)) {
        document.getElementById("stopTemplatePreview").style.display = "unset";
    }
    if (data.rmsfmImg1 != undefined) {
        rmsfmImg1 = data.rmsfmImg1;
    }
});

document.getElementById("save").addEventListener('click', function () {
    var znv = document.getElementById("removezn").checked;
    var znr = document.getElementById("znrep").value;
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var afn = document.getElementById("afname").value;
    var aln = document.getElementById("alname").value;
    var c1 = document.getElementById("color1").value;
    var c2 = document.getElementById("color2").value;
    var calc2 = document.getElementById("calc2").checked;
    var customCssWeb = document.getElementById("cssToAddWeb").value;
    var customCssBbb = document.getElementById("cssToAddBbb").value;
    saverepvals();
    chrome.storage.local.set({
        zn: znv,
        znr: znr,
        fn: fn,
        ln: ln,
        afn: afn,
        aln: aln,
        pfp: pfpsrc,
        c1: c1,
        c2: c2,
        calc2: calc2,
        rep: repvals,
        cssWeb: customCssWeb,
        cssBbb: customCssBbb,
        rmsfmImg1: rmsfmImg1
    }, function () {
        document.getElementById("refresh").style.display = "unset";
    })
    document.getElementById("save").style.display = "none";
});
document.getElementById("popupsave").addEventListener('click', function () {
    var znv = document.getElementById("removezn").checked;
    var znr = document.getElementById("znrep").value;
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var afn = document.getElementById("afname").value;
    var aln = document.getElementById("alname").value;
    var c1 = document.getElementById("color1").value;
    var c2 = document.getElementById("color2").value;
    var calc2 = document.getElementById("calc2").checked;
    var customCssWeb = document.getElementById("cssToAddWeb").value;
    var customCssBbb = document.getElementById("cssToAddBbb").value;
    saverepvals();
    chrome.storage.local.set({
        zn: znv,
        znr: znr,
        fn: fn,
        ln: ln,
        afn: afn,
        aln: aln,
        pfp: pfpsrc,
        c1: c1,
        c2: c2,
        calc2: calc2,
        rep: repvals,
        cssWeb: customCssWeb,
        cssBbb: customCssBbb,
        rmsfmImg1: rmsfmImg1
    }, function () {
        document.getElementById("refresh").style.display = "unset";
    })
    document.getElementById("save").style.display = "none";
    close();
});

document.getElementById("stopTemplatePreview").addEventListener('click', function () {
    previewCssWeb = "";
    previewCssBbb = "";
    previewRmsfmImg1 = "";
    chrome.storage.local.set({
        previewCssWeb: previewCssWeb,
        previewCssBbb: previewCssBbb,
        previewRmsfmImg1: previewRmsfmImg1
    }, function () {
        document.getElementById("refresh").style.display = "unset";
    })
    document.getElementById("stopTemplatePreview").style.display = "none";
});

document.getElementById("popupclose").addEventListener('click', function () {
    close();
    document.getElementById("save").style.display = "unset";
});

function close() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("znopts").style.display = "none";
    document.getElementById("nameopts").style.display = "none";
    document.getElementById("pfpopts").style.display = "none";
    document.getElementById("replaceopts").style.display = "none";
    document.getElementById("themeopts").style.display = "none";
    document.getElementById("cssopts").style.display = "none";
    document.getElementById("advancedCssopts").style.display = "none";
}

document.getElementById("hide").addEventListener('click', function () {
    document.getElementById("name").style.display = "none";
    document.getElementById("show").style.display = "unset";
});

document.getElementById("showb").addEventListener('click', function () {
    document.getElementById("name").style.display = "unset";
    document.getElementById("show").style.display = "none";
});

document.getElementById("removezn").addEventListener('click', function () {
    znCheck();
});
function znCheck() {
    if (document.getElementById("removezn").checked) {
        document.getElementById("znrep").style.display = "unset";
    } else {
        document.getElementById("znrep").style.display = "none";
        document.getElementById("znrep").value = "";
    }
}

document.getElementById("calc2").addEventListener('click', function () {
    calc2Check();
});
function calc2Check() {
    if (document.getElementById("calc2").checked) {
        document.getElementById("color2d").style.display = "none";
    } else {
        document.getElementById("color2d").style.display = "";
    }
}

document.getElementById("znpop").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("znopts").style.display = "unset";
});

document.getElementById("namepop").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("nameopts").style.display = "unset";
});

document.getElementById("pfppop").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("pfpopts").style.display = "unset";
});

document.getElementById("replacepop").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("replaceopts").style.display = "unset";
});

document.getElementById("themepop").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("themeopts").style.display = "unset";
    checkForCssThemes();
});

document.getElementById("customCss").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("cssopts").style.display = "unset";
    document.getElementById("themeopts").style.display = "none";
});

document.getElementById("backToCustomCss").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("cssopts").style.display = "unset";
    document.getElementById("advancedCssopts").style.display = "none";
});

document.getElementById("style").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("cssopts").style.display = "none";
    document.getElementById("themeopts").style.display = "unset";
    checkForCssThemes();
});

document.getElementById("advancedCss").addEventListener('click', function () {
    document.getElementById("popup").style.display = "unset";
    document.getElementById("cssopts").style.display = "none";
    document.getElementById("advancedCssopts").style.display = "unset";
});

document.getElementById("cssTemplates").addEventListener('click', function () {
    window.open("https://minis-negevvo.tk/rmsfmweb/rmsfmTemplates");
});

document.getElementById("removepfp").addEventListener('click', function () {
    pfpsrc = "nope";
    document.getElementById("removepfp").style.display = "none";
});

document.getElementById("addrep").addEventListener('click', function () {
    addrepinps();
});

document.getElementById("resetcolors").addEventListener('click', function () {
    document.getElementById("color1").value = "#106030";
    document.getElementById("color2").value = "#ffffff";
});

document.getElementById("teachers").addEventListener('click', function () {
    document.getElementById("color1").value = "#3C67AC";
    document.getElementById("color2").value = "#E9E7E9";
});

document.getElementById("navy").addEventListener('click', function () {
    document.getElementById("color1").value = "#445479";
    document.getElementById("color2").value = "#f4f7ff";
});

document.getElementById("turquoise").addEventListener('click', function () {
    document.getElementById("color1").value = "#307E71";
    document.getElementById("color2").value = "#F5FFFC";
});

document.getElementById("pink").addEventListener('click', function () {
    document.getElementById("color1").value = "#AA6EA3";
    document.getElementById("color2").value = "#FFF5FC";
});

document.getElementById("gold").addEventListener('click', function () {
    document.getElementById("color1").value = "#998B56";
    document.getElementById("color2").value = "#FFF9E5";
});

document.getElementById("red").addEventListener('click', function () {
    document.getElementById("color1").value = "#995656";
    document.getElementById("color2").value = "#FBE9E9";
});

document.getElementById("grey").addEventListener('click', function () {
    document.getElementById("color1").value = "#383838";
    document.getElementById("color2").value = "#FFFFFF";
});

function checkForCssThemes() {
    var result = "";
    var customCssWeb = document.getElementById("cssToAddWeb").value + "\n";
    var customCssBbb = document.getElementById("cssToAddBbb").value + "\n";
    if (customCssWeb.split('\n')[0].includes("color1:")) {
        result += '<span style="font-weight: bold;">(web) color1: </span>' + customCssWeb.split('\n')[0].replace("color1: ", "").replace("color1:", "") + ". ";
    }
    if (customCssWeb.split('\n')[1].includes("color2:")) {
        result += '<span style="font-weight: bold;">(web) color2: </span>' + customCssWeb.split('\n')[1].replace("color2: ", "").replace("color2:", "") + ". ";
    }
    if (customCssBbb.split('\n')[0].includes("color1:")) {
        result += '<span style="font-weight: bold;">(bbb) color1: </span>' + customCssBbb.split('\n')[0].replace("color1: ", "").replace("color1:", "") + ". ";
    }
    if (customCssBbb.split('\n')[1].includes("color2:")) {
        result += '<span style="font-weight: bold;">(bbb) color2: </span>' + customCssBbb.split('\n')[1].replace("color2: ", "").replace("color2:", "") + ". ";
    }
    if (result == "") {
        result = "none";
    }
    document.getElementById("cssThemes").innerHTML = result;
}

function addrepinps() {
    var row = document.createElement("div");
    row.classList.add('reprow');
    document.getElementById("repinps").appendChild(row);
    for (var i = 0; i < 2; i++) {
        var inp = document.createElement("input");
        inp.type = "text";
        inp.classList.add("repinp");
        if (i % 2 == 0) {
            inp.classList.add("repinp1");
            inp.placeholder = "replace from...";
        } else {
            inp.classList.add("repinp2");
            inp.placeholder = "to...";
        }
        row.appendChild(inp);
    }
    addminbtns();
}

function getrepinps() {
    for (var i = 0; i < repvals.length; i++) {
        addrepinps();
        document.getElementsByClassName("repinp1")[i].value = repvals[i][0];
        document.getElementsByClassName("repinp2")[i].value = repvals[i][1];
    }
}

var repvals = [];
function saverepvals() {
    repvals = [];
    var j = 0;
    for (var i = 0; i < document.getElementsByClassName("reprow").length; i++) {
        if (document.getElementsByClassName("repinp1")[i].value != "" || document.getElementsByClassName("repinp2")[i].value != "") {
            repvals[j] = [document.getElementsByClassName("repinp1")[i].value, document.getElementsByClassName("repinp2")[i].value];
        } else {
            j--;
        }
        j++;
    }
}

function addminbtns() {
    var minbtnnum = 0;
    try {
        minbtnnum = document.getElementsByClassName("minbtn").length;
    } catch (e) {}
    for (var i = minbtnnum; i < document.getElementsByClassName("reprow").length; i++) {
        var minbtn = document.createElement("button");
        minbtn.classList.add("minbtn");
        minbtn.innerHTML = "-";
        document.getElementsByClassName("reprow")[i].appendChild(minbtn);
        minbtn.addEventListener('click', function () {
            minbtn.parentElement.remove();
        });
    }
}

document.getElementById("pfpupload").addEventListener('change', function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        pfpsrc = reader.result;
        document.getElementById("removepfp").style.display = "unset";
    }
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById("rmsfmImg1").addEventListener('change', function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        rmsfmImg1 = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

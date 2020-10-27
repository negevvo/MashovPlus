var manifestData = chrome.runtime.getManifest();
document.getElementById("version").innerHTML = manifestData.version;
document.getElementById("updates").href = document.getElementById("updates").href + "?" + manifestData.version.replace(".", "", "gi");

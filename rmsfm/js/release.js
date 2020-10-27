'use strict';

var manifestData = chrome.runtime.getManifest();
var num = 0;
var stop = false;
while(!stop){
	try{
		document.getElementsByClassName("version")[num].innerHTML = manifestData.version;
		num++;
	}catch(e){
		stop = true;
		break;
	}
}
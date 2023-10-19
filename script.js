//your JS code here. If required.


let browserName = navigator.appName;
        
        // Get the browser version
let browserVersion = navigator.appVersion;

const d=document.createElement('div');
d.innerText=`You are using ${browserName} version ${browserVersion}`

document.body.appendChild(d);
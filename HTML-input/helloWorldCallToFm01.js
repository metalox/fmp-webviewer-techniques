var fmScriptHello="hello world";

function helloWorld() {
    FileMaker.PerformScriptWithOption ( fmScriptHello, "", "0" );
}

// to run this this would need onclick="helloWorld()" in the button element
// use: document.getElementById("button1").addEventListener("click", helloWorld);
//   in the script to define what happens when button1 is clicked
//   better in the script as we can change what happens dynamically as the script runs
//   see script js-helloWorldCallToFm02.js
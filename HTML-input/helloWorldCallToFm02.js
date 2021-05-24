var fmScriptHello="hello world";

function helloWorld() {
    FileMaker.PerformScriptWithOption ( fmScriptHello, "Hello World", "0" );
}

document.getElementById("button1").addEventListener("click", helloWorld);
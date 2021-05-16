var fmScriptHello="hello world";
const form = document.querySelector('form');

function handleSubmit(event) {
event.preventDefault();

const data = new FormData(event.target);

const value1 = data.get('petName');

FileMaker.PerformScriptWithOption ( fmScriptHello, value1, "0" );
}

form.addEventListener('submit', handleSubmit);

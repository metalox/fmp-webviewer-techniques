var fmScriptEdit="edit person OK";

function handleSubmit(event) {
event.preventDefault();

const data = new FormData(event.target);

const value = Object.fromEntries(data.entries());

value.prefs = data.getAll("prefs");

const result = JSON.stringify(value);

FileMaker.PerformScriptWithOption ( fmScriptEdit, result , "0" );
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
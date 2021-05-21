$("document").ready(function() {

// [Return] should only submit when the submit button is in focus
// but should work as [Return] in the notes test area

//const fmScriptEdit="edit person OK";
//const form = document.querySelector('form');
const form = document.getElementById("form1");
const notes = document.getElementById("notes");
const cancelbtn = document.getElementById("cancelbtn");
const submitbtn = document.getElementById("submitbtn");

form.setAttribute ("onkeydown" , "return event.key != 'Enter';" );

// control return key behaviour
function noReturn() {
form.setAttribute ("onkeydown" , "return event.key != 'Enter';" );
};

function allowReturn() {
form.removeAttribute("onkeydown");
};

// on submit
function handleSubmit(event) {
event.preventDefault();
const data = new FormData(event.target);
var formData = Object.fromEntries(data.entries());
formData.prefs = data.getAll("prefs");
const result = JSON.stringify( formData );
alert(result);
};

// cancel
function cancel() {
alert("cancel");
};

// hello world
function helloWorld() {
    alert("Hello World");
};

document.getElementById("hellobtn").addEventListener('click', helloWorld);
cancelbtn.addEventListener('click', cancel);
form.addEventListener('submit', handleSubmit);
notes.addEventListener('focus', allowReturn);
notes.addEventListener('blur', noReturn);


});

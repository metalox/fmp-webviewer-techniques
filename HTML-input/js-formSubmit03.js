// [Return] should only submit when the submit button is in focus
// but should work as [Return] in the notes test area

const fmScriptEdit="edit person OK";
//const form = document.querySelector('form');
const form = document.getElementById("form1");
const notes = document.getElementById("notes");
const cancelbtn = document.getElementById("cancelbtn");
const submitbtn = document.getElementById("submitbtn");
const recordinfo = document.getElementById("recordinfo");
const id_people = recordinfo.getAttribute("data-id_people");
const hashBefore = recordinfo.getAttribute("data-hashBefore");
const newRecord = recordinfo.getAttribute("data-newRecord");

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

function noEnter() {
form.setAttribute ("onkeydown" , "return event.key != 'Enter';" );
};

function allowEnter() {
form.removeAttribute("onkeydown");
};

// on submit
function handleSubmit(event) {
event.preventDefault();
const data = new FormData(event.target);
var formData = Object.fromEntries(data.entries());
formData.prefs = data.getAll("prefs");
formData.id_people = id_people ;
formData.hashBefore = hashBefore ;
formData.newRecord = newRecord  ;
const result = JSON.stringify( formData );
FileMaker.PerformScriptWithOption ( fmScriptEdit, result , "0" );
};

// cancel
function cancel() {
FileMaker.PerformScriptWithOption ( fmScriptEdit, "cancel" , "0" );
}

cancelbtn.addEventListener('click', cancel);
notes.addEventListener('focus', allowEnter);
notes.addEventListener('blur', noEnter);
submitbtn.addEventListener('focus', allowEnter);
submitbtn.addEventListener('blur', noEnter);
form.addEventListener('submit', handleSubmit);

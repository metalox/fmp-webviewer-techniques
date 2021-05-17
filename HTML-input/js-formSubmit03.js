var fmScriptEdit="edit person OK";
const recordinfo = document.getElementById("recordinfo");
const id_people = recordinfo.getAttribute("data-id_people");
const hashBefore = recordinfo.getAttribute("data-hashBefore");
const newRecord = recordinfo.getAttribute("data-newRecord");

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
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
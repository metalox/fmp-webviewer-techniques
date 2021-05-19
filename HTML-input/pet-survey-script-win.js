// testing for windows ie explorer
const form = document.querySelector('form');
const notes = document.getElementById("notes");
const cancelbtn = document.getElementById("cancelbtn");
const hellobtn = document.getElementById("hellobtn");
const submitbtn = document.getElementById("submitbtn");

const recordinfo = document.getElementById("recordinfo");
const id_people = recordinfo.getAttribute("data-id_people");
const hashBefore = recordinfo.getAttribute("data-hashBefore");
const newRecord = recordinfo.getAttribute("data-newRecord");

// cancel
function cancel() {
    alert("cancel");
    };
    
// hello world
    function helloWorld() {
        alert("Hello World");
};

// hello world
function handleSubmit(event) {
    event.preventDefault();
    alert("You clicked Submit");
};
    
cancelbtn.addEventListener('click', cancel);
hellobtn.addEventListener('click', helloWorld);
form.addEventListener('submit', handleSubmit);
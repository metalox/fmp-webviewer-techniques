var fmScriptHello="hello world";

function handleSubmit(event) {
event.preventDefault();
const data = new FormData(event.target);
const value1 = data.get('petName');
// alert( value1 ) ;
// console.log({ value1 });
FileMaker.PerformScriptWithOption ( fmScriptHello, value1, "0" );
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
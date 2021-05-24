
//$( "form" ).submit(function( event ) {
//  event.preventDefault();
//  const myFormArray = $( this ).serializeArray();
//  var myObject = {};
//  myObject.formData = myFormArray;
//  alert(JSON.stringify(myObject));
// });

const form1 = document.getElementById("form1");
const notes = document.getElementById("notes");

// const cancelbtn = document.getElementById("cancelbtn");
const submitbtn = document.getElementById("submitbtn");
// const hellobtn = document.getElementById("hellobtn");

// on load:
form1.setAttribute ("onkeydown" , "return event.key != 'Enter';" );
$("#example").html('<p class="warning">Return Key Blocked</p>');

// getRecordinfo
function getRecordinfo() {
    var obj = {};
    obj.newRecord = $("#recordinfo").data("newrecord");
    obj.id_people = $("#recordinfo").data("id_people");
    obj.hashbefore = $("#recordinfo").data("hashbefore");
      //  alert(JSON.stringify(recordinfo));
      return obj;
    };

// cancel
function cancel() {
    alert("cancel");
};   
// hello world
function helloWorld() {
    alert("Hello World");
};

// control return key behaviour
function noReturn() {
    form1.setAttribute ("onkeydown" , "return event.key != 'Enter';" );
    $("#example").html('<p class="warning">Return Key Blocked</p>');
};

function allowReturn() {
    form1.removeAttribute("onkeydown");
    $("#example").html('<p class="warning">Return Key Allowed</p>');
};



$.fn.getFormValues = function(){
  var formvals = {};
  $.each($(':input',this).serializeArray(),function(i,obj){     
      if (formvals[obj.name] == undefined)
          formvals[obj.name] = obj.value;
      else if (typeof formvals[obj.name] == Array) 
          formvals[obj.name].push(obj.value);
      else formvals[obj.name] = [formvals[obj.name],obj.value];
  }); 
  return formvals;
};

$( "form" ).submit(function( event ) {
    event.preventDefault();
    var obj = {};
    var formarr = $('#form1').getFormValues();
    var recordinfo = getRecordinfo();
    obj.recordinfo = recordinfo ;
    obj.recorddata = formarr ;
   alert(JSON.stringify(obj));
   });

notes.addEventListener('focus', allowReturn);
notes.addEventListener('blur', noReturn);
submitbtn.addEventListener('focus', allowReturn);
submitbtn.addEventListener('blur', noReturn);


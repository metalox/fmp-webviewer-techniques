// Form Submit - required js lib: jQuery

const fmScriptHello="hello_world_js";
const fmScriptEdit="edit_person_OK_jsP";
const form1 = document.getElementById("form1");
const notes = document.getElementById("notes");
const submitbtn = document.getElementById("submitbtn");

// on load:
form1.setAttribute ("onkeydown" , "return event.key != 'Enter';" );
$("#example").html('<p class="warning">Return Key Blocked</p>');

// getRecordinfo
function getRecordinfo() {
    var obj = {};
    obj.newRecord = $("#recordinfo").data("newrecord");
    obj.id_people = $("#recordinfo").data("id_people");
    obj.hashBefore = $("#recordinfo").data("hashbefore");
      //  alert(JSON.stringify(recordinfo));
      return obj;
    };

// cancel
function cancel() {
    // alert("cancel");
  FileMaker.PerformScriptWithOption ( fmScriptEdit, "cancel", "0" );
};   
// hello world
function helloWorld() {
    // alert("Hello World");
  FileMaker.PerformScriptWithOption ( fmScriptHello, "Hello World", "0" );
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
   //alert(JSON.stringify(obj));
 FileMaker.PerformScriptWithOption ( fmScriptEdit, JSON.stringify(obj) , "0" );
   });

notes.addEventListener('focus', allowReturn);
notes.addEventListener('blur', noReturn);
submitbtn.addEventListener('focus', allowReturn);
submitbtn.addEventListener('blur', noReturn);


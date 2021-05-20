

//$( "form" ).submit(function( event ) {
//  event.preventDefault();
//  const myFormArray = $( this ).serializeArray();
//  var myObject = {};
//  myObject.formData = myFormArray;
//  alert(JSON.stringify(myObject));
// });

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
}

$( "form" ).submit(function( event ) {
 event.preventDefault();
 var myarr = $('#form1').getFormValues();
alert(JSON.stringify(myarr));
});






$( "form" ).submit(function( event ) {
  var myObject = $( this ).serializeArray();
  event.preventDefault();
  alert(JSON.stringify(myObject));
});



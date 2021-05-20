

$( "form" ).submit(function( event ) {
  event.preventDefault();
  const myObject = $( this ).serializeArray();
  alert(JSON.stringify(myObject));
});



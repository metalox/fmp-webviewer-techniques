
$( "form" ).submit(function( event ) {
    alert( $( this ).serializeArray() );
    event.preventDefault();
  });



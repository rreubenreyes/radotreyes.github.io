$( document ).on( 'click', 'a', function( event ) {
   if ( this.hash !== "" ) {
      event.preventDefault();

      $( 'html, body' ).animate( {
          scrollTop: $( $.attr( this, 'href' ) ).offset().top
      }, 500, 'easeInCubic' );
    }
});

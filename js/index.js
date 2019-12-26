$("#project-btn").click(function() {
    if ( $( ".github-widget" ).is( ":hidden" ) ) {
        $( ".github-widget" ).slideDown( "slow" );
    } 
    else {
        $( ".github-widget" ).slideUp();
    }
});
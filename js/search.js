$(document).ready(function(){
    $("#search-button").click(function(){
       $("#srch-close-btn, #search-bar, #search-button, #search-drawer").addClass("show");
       $("#search-bar").focus();
    });
    $("#srch-close-btn, .menu-button").click(function(){
       $("#srch-close-btn, #search-bar, #search-button, #search-drawer").removeClass("show"); 
    });
});

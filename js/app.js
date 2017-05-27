$(document).foundation();
$(document).ready(function(){
    if($(window).innerWidth() <= 751) {
       $(".stephen .contact").removeClass("abt_contact_container"); 
       $(".stephen .contact").addClass("row"); 
       $(".stephen .contact .mailing").addClass("medium-6 columns"); 
       $(".stephen .contact .social").addClass("medium-6 columns");
    }else{
       $(".stephen .contact").addClass("abt_contact_container"); 
       $(".stephen .contact").removeClass("row"); 
       $(".stephen .contact .mailing").removeClass("medium-6 columns"); 
       $(".stephen .contact .social").removeClass("medium-6 columns"); 
    }
});
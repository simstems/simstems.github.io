$(document).foundation();
$(document).ready(function(){
    // For about.html
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
// For contact.html
function verify() {
    
    function send(){
        document.formspree.method ="POST";
        document.formspree.action ="https://formspree.io/contact@simstems.com";
        return true;
    }

    var errorBackground = '#fb7e7e', correctBackground = '#fff';
    
    $(".mail-button").focus(function(){
        if ((document.formspree.email.value == "") && (document.formspree.subject.value == "") && (document.formspree.message.value == "")) {
            $('.mail-form .email').css('background-color', errorBackground);
            $('.mail-form .subject').css('background-color', errorBackground);
            $('.mail-form .message').css('background-color', errorBackground);
        }
        else if ((document.formspree.email.value == "") && (document.formspree.subject.value == "")) {
            $('.mail-form .email').css('background-color', errorBackground);
            $('.mail-form .subject').css('background-color', errorBackground);
            $('.mail-form .message').css('background-color', correctBackground);
        }
        else if ((document.formspree.email.value == "") && (document.formspree.message.value == "")) {
            $('.mail-form .email').css('background-color', errorBackground);
            $('.mail-form .message').css('background-color', errorBackground);
            $('.mail-form .subject').css('background-color', correctBackground);
        }
        else if ((document.formspree.subject.value == "") && (document.formspree.message.value == "")) {
            $('.mail-form .subject').css('background-color', errorBackground);
            $('.mail-form .message').css('background-color', errorBackground);
            $('.mail-form .email').css('background-color', correctBackground);
        }
        else if (document.formspree.message.value == "") {
            $('.mail-form .message').css('background-color', errorBackground);
            $('.mail-form .email').css('background-color', correctBackground);
            $('.mail-form .subject').css('background-color', correctBackground);
        }
        else if (document.formspree.subject.value == "") {
            $('.mail-form .subject').css('background-color', errorBackground);
             $('.mail-form .email').css('background-color', correctBackground);
            $('.mail-form .message').css('background-color', correctBackground);
        }
        else if (document.formspree.email.value == "") {
            $('.mail-form .email').css('background-color', errorBackground);
             $('.mail-form .subject').css('background-color', correctBackground);
            $('.mail-form .message').css('background-color', correctBackground);
        }
        else {
            $('.mail-form .email').css('background-color', correctBackground);
            $('.mail-form .subject').css('background-color', correctBackground);
            $('.mail-form .message').css('background-color', correctBackground);
        }
    });
    return send();
}
verify();
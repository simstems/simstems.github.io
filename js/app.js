$(document).foundation();
function getiFrameForm(){
    var iFrameForm = $('iframe').contents().find('.mail-form');
    return iFrameForm;
}
function getiFrameFormSubject(){
    var iFrameFormSubject = $('iframe').contents().find('#form-subject');
    return iFrameFormSubject;
}
function scrollDown(){
    $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    return false;
}    
$(document).ready(function(){
    $('.image-slider').slick({
        arrows:true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
    });
    $("#contact-hdr, #contact-lnk, .get-quote-support, .get-quote-consult, .get-quote-web").click(function(){
        $("#about-title").removeClass("selected");
        $(".about-row").fadeOut(1000, function(){
            $("#contact-title").addClass("selected");
            $(".mail-row").fadeIn(500)
        });
        scrollDown();
    });
    $("#about-hdr, #about-lnk").click(function(){
        $("#contact-title").removeClass("selected");
        $(".mail-row").fadeOut(1000, function(){
            $("#about-title").addClass("selected");
            $(".about-row").fadeIn(500)
        });
        scrollDown();
    });
    $(".get-quote-support").click(function(){
        var iFrameForm = getiFrameForm();
        var iFrameFormSubject = getiFrameFormSubject();
        iFrameFormSubject.val("Tech Support");
        iFrameFormSubject.attr('readonly', true);
        iFrameForm.attr('action', 'https://formspree.io/techsupport@simstems.com');
        scrollDown();
    }); 
    $(".get-quote-consult").click(function(){
        var iFrameForm = getiFrameForm();
        var iFrameFormSubject = getiFrameFormSubject();
        iFrameFormSubject.val("Consultation");
        iFrameFormSubject.attr('readonly', true);
        iFrameForm.attr('action', 'https://formspree.io/consultation@simstems.com');
        scrollDown();
    }); 
    $(".get-quote-web").click(function(){
        var iFrameForm = getiFrameForm();
        var iFrameFormSubject = getiFrameFormSubject();
        iFrameFormSubject.val("Web Design");
        iFrameFormSubject.attr('readonly', true);
        iFrameForm.attr('action', 'https://formspree.io/webdesign@simstems.com');
        scrollDown();
    });
    var RefreshButton = $('iframe').contents().find('.refresh');
    RefreshButton.click(function(){
        var iFrameForm = getiFrameForm();
        var iFrameFormSubject = getiFrameFormSubject();
        iFrameFormSubject.attr('readonly', false);
        iFrameForm.attr('action', 'https://formspree.io/contact@simstems.com');
    });
});


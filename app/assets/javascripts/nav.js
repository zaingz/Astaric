$(document).ready(function() {

    $("#sticker").sticky({topSpacing:0});


    $('#social').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.social').offset().top }, 1000);
    });

    $('#service').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.service').offset().top-100 }, 1000);
    });

    $('#portfolio').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.port_header').offset().top-50 }, 1000);
    });
    $('#skills').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.skills').offset().top-50 }, 1000);
    });

    $('#facts').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.facts').offset().top-51 }, 1000);
    });
    $('#team').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.team_header').offset().top-51 }, 1000);
    });
    $('#contact').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.contact').offset().top-51 }, 1000);
    });


});
$(document).ready(function() {



    $('#view_btn').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.port_header').offset().top-100 }, 1000);
    });


    $('#image_home').click(function(e) {

        e.preventDefault();
        $("html, body").delay(1).animate({scrollTop: $('.header').offset().top-0 }, 1000);
    });

});
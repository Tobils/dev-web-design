/* ==========================================
                Preloader
========================================== */
$(window).on('load', function() { // make sure to load whole site
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/* ==========================================
                Team 
========================================== */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });
});
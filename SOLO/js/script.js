/* ==========================================
                Preloader
========================================== */
$(window).on('load', function() { // make sure to load whole site
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});
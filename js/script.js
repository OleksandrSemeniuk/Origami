$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 4000
    });
    // ^^^^^^^^^^^для слайдера^^^^^^^^^^^^^^^
    $('.mobile-menu').click(function(event) {
        event.preventDefault();
        $('body').addClass('open-menu');
    });
    $('.mobile-overlay').click(function(event) {
        $('body').removeClass('open-menu');
    });
    //^^^^^^^^^^^^^^^для боковонго меню^^^^^^^^^^^^^


    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
});

// $('#myCollapse').collapse({
//     toggle: true
// });

// $('.collapse').collapse()

$(document).ready(function($) {
    $('.my-slider').unslider();
});

$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".top-menu").addClass("scroll-bg");
        } else {
            $(".top-menu").removeClass("scroll-bg");
        }
    });
});

function initMap() {
    var coordinates = { lat: 47.212325, lng: 38.933663 },

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });
}
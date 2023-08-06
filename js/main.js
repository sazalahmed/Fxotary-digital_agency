$(function () {

    "use strict";

    //======menu search js======
    $(".search_icon").on("click", function () {
        $(".menu_search").addClass("show_search");
    });

    $(".close_search").on("click", function () {
        $(".menu_search").removeClass("show_search");
    });


    // latest project slider
    $('.marquee_animi').marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });


    // latest project slider
    $('.marquee_animi2').marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        pauseOnHover: true
    });


    //=========main.js=========   
    $('.count').countUp();


    //=======TESTIMONIAL SLIDER======
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',
    });












});

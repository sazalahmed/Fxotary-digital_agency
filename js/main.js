$(function () {

    "use strict";

    //======menu search js======
    $(".search_icon").on("click", function () {
        $(".menu_search").addClass("show_search");
    });

    $(".close_search").on("click", function () {
        $(".menu_search").removeClass("show_search");
    });


    //=====MENU FIX JS======   
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    // latest project slider
    $('.marquee_animi').marquee({
        speed: 70,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });


    // latest project slider
    $('.marquee_animi2').marquee({
        speed: 70,
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

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


    //=====STICKY SIDEBAR======= 
    $("#sticky_sidebar").stickit({
        top: 70,
    })


    //*=======SCROLL BUTTON=======
    $('.tf__scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 500) {
            $('.tf__scroll_btn').fadeIn();
        } else {
            $('.tf__scroll_btn').fadeOut();
        }
    });


    //======MOBILE MENU BUTTON=======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });


    //======MOBILE MENU BUTTON=======
    $(".nav-item").on("click", function () {
        $(".droap_menu").toggleClass("show_m_menu");
    });


});

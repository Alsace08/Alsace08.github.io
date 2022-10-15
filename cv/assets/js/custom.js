(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            portfolio carousel
            URL: http://www.bootstrapmb.com
        ----------------------------------------------------*/
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });
        /*---------------------------------------------------
            skill progress bar
        ----------------------------------------------------*/
        $('#circle-1').circleProgress({
            value: 0.85,
            size: 100,
            fill: {
                color: '#130f40'
            }
        });

        $('#circle-2').circleProgress({
            value: 0.95,
            fill: {
                color: '#130f40'
            }
        });

        $('#circle-3').circleProgress({
            value: 0.90,
            fill: {
                color: '#130f40'
            }
        });

        /*---------------------------------------------------
            counter
        ----------------------------------------------------*/
        $('.counter-single h3').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });

        /*---------------------------------------------------
            scrollIt plugin activation
        ----------------------------------------------------*/
        $.scrollIt();

        /*---------------------------------------------------
            Smooth Scroll
        ----------------------------------------------------*/
        $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header").removeClass("sticky");
        } else {
            $("#header").addClass("sticky");
        }
    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));

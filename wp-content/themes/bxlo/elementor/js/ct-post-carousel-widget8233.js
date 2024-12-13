( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCTPostCarouselHandler = function( $scope, $ ) {
        var breakpoints = elementorFrontend.config.breakpoints;
        var carousel = $scope.find(".ct-slick-carousel");
        var data = carousel.data();
        var slickOptions = {
            slidesToShow: data.colxl,
            slidesToScroll: data.slidestoscroll,
            autoplay: true === data.autoplay,
            autoplaySpeed: data.autoplayspeed,
            infinite: true === data.infinite,
            pauseOnHover: true === data.pauseonhover,
            speed: data.speed,
            arrows: true === data.arrows,
            dots: true === data.dots,
            rtl: true === data.dir,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: data.collg
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: data.colmd
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: data.colsm
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: data.colxs,
                        slidesToScroll: data.colxs,
                    }
                },
            ]
        };
        var nav_for = $scope.find(".ct-slick-nav");
        if(nav_for.length > 0){
            slickOptions.asNavFor = nav_for;
        }
        if(typeof carousel.attr('data-centerMode') !== 'undefined') {
            slickOptions.centerMode = carousel.attr('data-centerMode') == 'true' ? true : false;
        }
        if(typeof carousel.attr('data-vertical') !== 'undefined') {
            slickOptions.vertical = carousel.attr('data-vertical') == 'true' ? true : false;
        }
        carousel.slick(slickOptions);

        $('.ct-nav-carousel').parents('.elementor-element').addClass('hide-nav');
        $('.ct-nav-carousel .nav-prev').on('click', function () {
            $(this).parents('.elementor-element').find('.slick-prev').trigger('click');
        });
        $('.ct-nav-carousel .nav-next').on('click', function () {
            $(this).parents('.elementor-element').find('.slick-next').trigger('click');
        });

        $('.ct-portfolio-carousel4 .ct-portfolio-images .slick-next').on('click', function () {
            $(this).parents('.ct-portfolio-carousel4').find('.ct-portfolio-content .slick-next').trigger('click');
        });

        $('.ct-portfolio-carousel4 .ct-portfolio-images .slick-prev').on('click', function () {
            $(this).parents('.ct-portfolio-carousel4').find('.ct-portfolio-content .slick-prev').trigger('click');
        });

        $('.pxl-slick-arrow').parents('.ct-slick-slider').addClass('pxl-hide-arrow');
        $('.pxl-slick-prev').on('click', function () {
            $(this).parents('.ct-slick-slider').find('.slick-prev').trigger('click');
        });
        $('.pxl-slick-next').on('click', function () {
            $(this).parents('.ct-slick-slider').find('.slick-next').trigger('click');
        });

        var slider_nav = $scope.find('.ct-slick-nav');
        if(slider_nav.length > 0){
            $(slider_nav).slick({
                slidesToShow: parseInt(slider_nav.attr('data-nav')),
                slidesToScroll: 1,
                asNavFor: carousel,
                dots: false,
                arrows: true,
                centerMode: false,
                infinite: false,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 8000,
                speed: 800,
                nextArrow: '<span class="slick-next fac fac-angle-right"></span>',
                prevArrow: '<span class="slick-prev fac fac-angle-left"></span>',
                rtl: true === slider_nav.data('dir'),
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            });
        }

    };


    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_blog_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_portfolio_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_service_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_history_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_team_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_testimonial_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_client_carousel.default', WidgetCTPostCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_service_external.default', WidgetCTPostCarouselHandler );
    } );
} )( jQuery );
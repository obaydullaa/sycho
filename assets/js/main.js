(function ($) {
    "use strict";
    
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });
    
    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    


       //  Sticky Header 
    
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });
    
    
    
    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });
    
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
//  Data-Background 

$("[data-background").each(function () {

    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");

});


    //  Portfolio Slider Js

	$('.portfolio-active').slick({
    centerMode: true,
		centerPadding: '0px',
		dots: false,
		arrows: false,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{

				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1

				}

			}

		]

	});



    //  Client Slider 
	$('.brand-active').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      });

      // testimonials active
      $('.testimonials-active').slick({
        dots: false,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"> <i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"> <i class="fas fa-long-arrow-alt-right"></i></button>',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      });

    //  award Slider 
    $('.award-active').slick({
      dots: false,
      arrows: false,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });

    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
    // WOW active
    new WOW().init();
    
    
    })(jQuery);
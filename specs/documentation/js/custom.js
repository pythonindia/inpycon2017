var $ = jQuery.noConflict();

function image_preload(selector, parameters) {
	var params = {
		delay: 250,
		transition: 400,
		easing: 'linear'
	};
	$.extend(params, parameters);

	$(selector).each(function() {
		var image = $(this);
		image.css({visibility:'hidden', opacity: 0, display:'block'});
		image.wrap('<span class="preloader" />');
		image.one("load", function(evt) {
			$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
				$(this).unwrap('<span class="preloader" />');
			});
		}).each(function() {
			if(this.complete) $(this).trigger("load");
		});
	});
}

var currentActiveSection = 'docs-start-installation';

function onePageCurrentSection(){
    $(".docs-content-inner").each(function(index) {
        var h = $(this).offset().top;
        var y = $(window).scrollTop();

        if( y + 250 >= h && y < h + $(this).height() && $(this).attr('id') != currentActiveSection ) {
            currentActiveSection = $(this).attr('id');
        }
    });

    return currentActiveSection;
}


jQuery(document).ready(function($) {

        // Dropdown Menu

        if ( $().superfish ) { $('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block'); }

        $('#primary-menu .mega-menu-content, #primary-menu ul ul').each( function( index, element ){

            var $menuChildElement = $(element);
            var windowWidth = $(window).width();
            var menuChildOffset = $menuChildElement.offset();
            var menuChildWidth = $menuChildElement.width();
            var menuChildLeft = menuChildOffset.left;

            if(windowWidth - (menuChildWidth + menuChildLeft) < 0) {
                $menuChildElement.addClass('menu-pos-invert');
            }

        });

        if ( $().superfish ) {

            $('#primary-menu > ul, #primary-menu > div > ul,.top-links > ul').superfish({
                popUpSelector: 'ul,.mega-menu-content,.top-link-section',
                delay: 250,
                speed: 350,
                animation: {opacity:'show'},
                animationOut:  {opacity:'hide'},
                cssArrows: false
            });

        }


        $( '#primary-menu ul li:has(ul)' ).addClass('sub-menu');
        $( '.top-links ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );
        $( '.top-links > ul' ).addClass( 'clearfix' );

        $("#primary-menu.sub-title > ul > li").hover(function() {
            $(this).prev().css({ backgroundImage : 'none' });
        }, function() {
            $(this).prev().css({ backgroundImage : 'url("images/icons/menu-divider.png")' });
        });

        // Scroll to Top

		$(window).scroll(function() {
			if($(this).scrollTop() > 450) {
                $('#gotoTop').fadeIn();
			} else {
				$('#gotoTop').fadeOut();
			}
		});

		$('#gotoTop').click(function() {
			$('body,html').animate({scrollTop:0},400);
            return false;
		});


        $('[data-toggle="tooltip"]').tooltip();


        // Siblings Fader

        siblingsFader=function(){
		$(".siblings_fade,.flickr_badge_image").hover(function() {
			$(this).siblings().stop().fadeTo(400,0.5);
		}, function() {
			$(this).siblings().stop().fadeTo(400,1);
		});
		};
		siblingsFader();


        // Images Preload

        image_preload( '.portfolio-item:not(:has(.fslider)) img' );


        // Image Fade

		imgFade=function(){
		$('.image_fade,#top-menu li.top-menu-em a').hover(function(){
			$(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
		}, function () {
			$(this).animate({opacity: 1}, 400);
		});
		};
		imgFade();


        // Toggles

        $(".togglec").hide();

    	$(".togglet").click(function(){

            $(this).toggleClass("toggleta").next(".togglec").slideToggle(300);
            return true;

    	});

        // Accordions

        $('.accordion').each( function(){

            var $accElement = $(this);
            var accElementState = $accElement.attr('data-state');

            $accElement.find('.acc_content').hide();

            if( accElementState != 'closed' ) {
                $accElement.find('.acctitle:first').addClass('acctitlec').next().show();
            }

            $accElement.find('.acctitle').click(function(){
                if( $(this).next().is(':hidden') ) {
                    $accElement.find('.acctitle').removeClass('acctitlec').next().slideUp("normal");
                    $(this).toggleClass('acctitlec').next().slideDown("normal");
                }
                return false;
            });

        });

        if ($('.docs-navigation').length) {
            var el = $('.docs-navigation'),
                stickyTop = el.offset().top,
                footerHeight = $('#footer').outerHeight();

            $( '.docs-navigation' ).find('[data-scrollto]').parent('li').removeClass('current');
            $( '.docs-navigation' ).find('[data-scrollto="#' + onePageCurrentSection() + '"]').parent('li').addClass('current');

            $(window).scroll(function(){
                var stickyHeight = el.children('ul').outerHeight(),
                    limit = $('#footer').offset().top - stickyHeight,
                    windowTop = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (stickyTop < windowTop){
                    el.css({ position: 'fixed', top: 0 });
                } else {
                    el.css({ position: 'absolute', top: 0 });
                }

                if (limit < windowTop) {
                    var diff = limit - windowTop;
                    el.css({height: windowHeight - diff - footerHeight, top: diff});
                } else {
                    el.css({height: '100%'});
                }

                $( '.docs-navigation' ).find('[data-scrollto]').parent('li').removeClass('current');
                $( '.docs-navigation' ).find('[data-scrollto="#' + onePageCurrentSection() + '"]').parent('li').addClass('current');
            });
        }

        // FitVids

        if ( $().fitVids ) { $("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media").fitVids( { customSelector: "iframe[src^='http://www.dailymotion.com/embed']"} ); }

        // Anchor Link Scroll

        $("a[data-scrollto]").click(function(){

            var divScrollToAnchor = $(this).attr('data-scrollto');

            var topOffsetScroll = 40;

            $('html, body').stop().animate({
                'scrollTop': $( divScrollToAnchor ).offset().top - topOffsetScroll
            }, 750, 'easeOutQuint');

            return false;

    	});


        $('.fslider').addClass('preloader2');

        sm_onScrollAnimation=function(){

        // On Scroll Animations

        $('[data-animate]').each(function(){

            var $toAnimateElement = $(this);

            var toAnimateDelay = $(this).attr('data-delay');

            var toAnimateDelayTime = 0;

            if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 500; } else { toAnimateDelayTime = 500; }

            if( !$toAnimateElement.hasClass('animated') ) {

                $toAnimateElement.addClass('not-animated');

                var elementAnimation = $toAnimateElement.attr('data-animate');

                $toAnimateElement.appear(function () {

                    setTimeout(function() {
                        $toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
                    }, toAnimateDelayTime);

                },{accX: 0, accY: -80},'easeInCubic');

            }

        });
        };
        sm_onScrollAnimation();


        // Magnific Lightbox

        loadMagnific=function(){

        $('[data-lightbox="image"]').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            }
        });

        $('[data-lightbox="gallery"]').each(function() {

            if( $(this).find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
                $(this).find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
            }

            $(this).magnificPopup({
                delegate: 'a[data-lightbox="gallery-item"]',
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        });

        $('[data-lightbox="iframe"]').magnificPopup({
            disableOn: 600,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('[data-lightbox="ajax"]').magnificPopup({
            type: 'ajax',
            callbacks: {
                ajaxContentAdded: function(mfpResponse) {
                    loadFlexSlider();
                }
            }
        });

        };
        loadMagnific();

});


$(window).load(function() {

    siblingsFader();

    if ( $().flexslider ) {

        loadFlexSlider=function(){

        $('.fslider .flexslider').each(function() {

            var $flexsSlider = $(this);

            var flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation');
            var flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing');
            var flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction');
            var flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow');
            var flexsPause = $flexsSlider.parent('.fslider').attr('data-pause');
            var flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed');
            var flexsVideo = $flexsSlider.parent('.fslider').attr('data-video');
            var flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi');
            var flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows');
            var flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs');
            var flexsSheight = true;
            var flexsUseCSS = false;

            if( !flexsAnimation ) { flexsAnimation = 'slide'; }
            if( !flexsEasing || flexsEasing == 'swing' ) {
                flexsEasing = 'swing';
                flexsUseCSS = true;
            }
            if( !flexsDirection ) { flexsDirection = 'horizontal'; }
            if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
            if( !flexsPause ) { flexsPause = 5000; }
            if( !flexsSpeed ) { flexsSpeed = 600; }
            if( !flexsVideo ) { flexsVideo = false; }
            if( flexsDirection == 'vertical' ) { flexsSheight = false; }
            if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
            if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
            if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }

            $flexsSlider.flexslider({

                selector: ".slider-wrap > .slide",
                animation: flexsAnimation,
                easing: flexsEasing,
                direction: flexsDirection,
                slideshow: flexsSlideshow,
                slideshowSpeed: Number(flexsPause),
                animationSpeed: Number(flexsSpeed),
                pauseOnHover: true,
                video: flexsVideo,
                controlNav: flexsPagi,
                directionNav: flexsArrows,
                smoothHeight: flexsSheight,
                useCSS: flexsUseCSS,
                start: function(slider){
                    sm_onScrollAnimation();
                    verticalAlignMiddle();
                    slider.parent().removeClass('preloader2');
                    var t = setTimeout( function(){ $('#portfolio.portfolio-full,#portfolio.portfolio-masonry,#posts').isotope('reLayout'); }, 1200 );
                    loadMagnific();
                    $('.flex-prev').html('<i class="icon-angle-left"></i>');
                    $('.flex-next').html('<i class="icon-angle-right"></i>');
                },
                after: function(){
                    if( $('#portfolio').has('portfolio-full') ) { $('#portfolio.portfolio-full').isotope('reLayout'); }
                }

            });

        });

        };
        loadFlexSlider();

    }


    thumbMasonryRealign=function(){

    $('.masonry-thumbs').each( function(){

        var masonryItemContainer = $(this);
        var bigImageNumber = masonryItemContainer.attr('data-big');
        if( bigImageNumber ) { bigImageNumber = Number(bigImageNumber) - 1; }
        var firstBigWidth = masonryItemContainer.find('a:eq(0)').outerWidth();

        masonryItemContainer.isotope({
            masonry: {
                columnWidth: firstBigWidth
            }
        });

        if( $.isNumeric( bigImageNumber ) ) {
            var t = setTimeout( function(){
                masonryItemContainer.find('a:eq('+bigImageNumber+')').css({ width: firstBigWidth*2 + 'px' });
                masonryItemContainer.isotope('reLayout');
            }, 1000 );
        }

        $(window).resize(function() {
            masonryItemContainer.isotope('reLayout');
        });

    });

    };
    thumbMasonryRealign();

});
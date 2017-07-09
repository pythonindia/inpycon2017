/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
"use strict";
jQuery(document).on('ready', function() {
	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu(){
		jQuery('.menu-item-has-children').prepend('<span class="tg-dropdowarrow"><i class="icon-chevron-right"></i></span>');
		jQuery('.menu-item-has-children span').on('click', function() {
			jQuery(this).next().next().slideToggle(300);
			jQuery(this).parent('.menu-item-has-children').toggleClass('tg-open');
		});
	}
	collapseMenu();
	/* -------------------------------------
			HOME SLIDER
	-------------------------------------- */
	var _tg_homeslider = jQuery('#tg-homeslider')
	_tg_homeslider.owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		nav: true,
		autoplay: true,
		animateOut: 'fadeOut',
		navText: [
			'<i class="icon-arrow-left"></i>',
			'<i class="icon-arrow-right"></i>',
		],
		navClass: [
			'tg-btnroundprev',
			'tg-btnroundnext'
		],
	});
	/* -------------------------------------
			SECTION SCROLL
	-------------------------------------- */
	var _tg_btnsectionscroll = jQuery('.tg-btnsectionscroll');
	_tg_btnsectionscroll.on('click', function(event) {
		event.preventDefault();
		console.log('clicked');
		var offset = 2;
		jQuery('html, body').animate({
			scrollTop: jQuery("#tg-main").offset().top + offset
		}, 2000);
	});
	/* -------------------------------------
			NEXT EVENT COUNTER
	-------------------------------------- */
	var _tg_upcomingeventcounter = jQuery('.tg-upcomingeventcounter');
	_tg_upcomingeventcounter.countdown('2017/10/12', function(event) {
		var $this = jQuery(this).html(event.strftime(''
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span> Days</span><span>%-D</span></div></div>'
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>Hours</span><span>%H</span></div></div>'
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>Minutes</span><span>%M</span></div></div>'
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>Seconds</span><span>%S</span></div></div>'
		));
	});
	/* -------------------------------------
			COUNTER
	-------------------------------------- */
	var _tg_counters = jQuery('#tg-statisticscounters');
	_tg_counters.appear(function () {
		var _tg_counter = jQuery('.tg-counter > h2 > span');
		_tg_counter.countTo();
	});
	/* ---------------------------------------
			GALLERY FILTERABLE
	-------------------------------------- */
	var $container = jQuery('.tg-galleryfilterable');
	var $optionSets = jQuery('.tg-optionset');
	var $optionLinks = $optionSets.find('a');
	function doIsotopeFilter() {
		if (jQuery().isotope) {
			var isotopeFilter = '';
			$optionLinks.each(function () {
				var selector = jQuery(this).attr('data-filter');
				var link = window.location.href;
				var firstIndex = link.indexOf('filter=');
				if (firstIndex > 0) {
					var id = link.substring(firstIndex + 7, link.length);
					if ('.' + id == selector) {
						isotopeFilter = '.' + id;
					}
				}
			});
			jQuery(window).load(function () {
				$container.isotope({
					itemSelector: '.tg-masonrygrid',
					filter: isotopeFilter
				});
			});
			$optionLinks.each(function () {
				var $this = jQuery(this);
				var selector = $this.attr('data-filter');
				if (selector == isotopeFilter) {
					if (!$this.hasClass('tg-active')) {
						var $optionSet = $this.parents('.option-set');
						$optionSet.find('.tg-active').removeClass('tg-active');
						$this.addClass('tg-active');
					}
				}
			});
			$optionLinks.on('click', function () {
				var $this = jQuery(this);
				var selector = $this.attr('data-filter');
				$container.isotope({itemSelector: '.tg-masonrygrid', filter: selector});
				if (!$this.hasClass('tg-active')) {
					var $optionSet = $this.parents('.tg-optionset');
					$optionSet.find('.tg-active').removeClass('tg-active');
					$this.addClass('tg-active');
				}
				return false;
			});
		}
	}
	var isotopeTimer = window.setTimeout(function () {
		window.clearTimeout(isotopeTimer);
		doIsotopeFilter();
		/* -------------------------------------
				MASONRY GALLERY
		-------------------------------------- */
		var _tg_masnorygallery = jQuery('#tg-masnorygallery');
		_tg_masnorygallery.packery({
			itemSelector: '.tg-masonryitem',
			columnWidth: 0,
		});
	}, 1000);
	/* -------------------------------------
			PRETTY PHOTO GALLERY
	-------------------------------------- */
	jQuery("a[data-rel]").each(function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
	/* ---------------------------------------
			GALLERY HOVER
	--------------------------------------- */
	jQuery(function () {
		jQuery('.tg-gallery').each(function () {
			jQuery(this).hoverdir({
				hoverDelay : 75,
			});
		});
	});
	/* -------------------------------------
			THEME ACCORDION
	-------------------------------------- */
	function themeAccordion() {
		jQuery('.tg-panelcontent').hide();
		jQuery('.tg-accordion h4:first').addClass('active').next().slideDown('slow');
		jQuery('.tg-accordion h4').on('click',function() {
			if(jQuery(this).next().is(':hidden')) {
				jQuery('.tg-accordion h4').removeClass('active').next().slideUp('slow');
				jQuery(this).toggleClass('active').next().slideDown('slow');
			}
		});
	}
	themeAccordion();
	/* -------------------------------------
			CHECKBOX SCROLL
	-------------------------------------- */
	var _tg_themescrollbar = jQuery(".tg-themescrollbar");
	_tg_themescrollbar.mCustomScrollbar({
		axis:"y",
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	var _tg_locationmap = jQuery("#tg-locationmap");
	_tg_locationmap.gmap3({
		marker: {
			address: "1600 Elizabeth St, Melbourne, Victoria, Australia",
			options: {
				title: "Bee Vibrant",
				icon: "images/map-marker2.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			TESTIMONIAL SLIDER
	-------------------------------------- */
	var _tg_testimonialslider = jQuery('.tg-testimonialslider');
	_tg_testimonialslider.owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots: false,
		nav: false,
		animateOut: 'fadeOut',
	});
	/* -------------------------------------
			RELATED POSTS SLIDER
	-------------------------------------- */
	var _tg_relatedpostsslider = jQuery('#tg-relatedpostsslider');
	_tg_relatedpostsslider.owlCarousel({
		loop: true,
		dots: false,
		nav: false,
		autoplay: true,
		margin:30,
		responsiveClass:true,
		responsive:{
			320:{
				items:1,
			},
			568:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	
	/* -------------------------------------
			ROCKSTARS SLIDER
	-------------------------------------- */
	var _tg_rockstarslider = jQuery('.tg-rockstarslider');
	_tg_rockstarslider.owlCarousel({
		autoplay: false,
		loop: true,
		dots: true,
		nav: false,
		margin: 30,
		responsiveClass:true,
		navText: [
			'<i class="icon-chevron-left"></i>',
			'<i class="icon-chevron-right"></i>',
		],
		navClass: [
			'tg-btnroundprev',
			'tg-btnroundnext'
		],
		responsive:{
			0:{
				items:1,
			},
			569:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:2,
			},
			1440:{
				items:3,
			}
		}
	});
	/* -------------------------------------
			CHATBOX TOGGLE
	-------------------------------------- */
	jQuery('#tg-btnclosechat, #tg-getsupport').on('click', function(){
		jQuery('#tg-chatbox').slideToggle();
	});
	/* -------------------------------------
			SECTION SCROLL
	-------------------------------------- */
	if (jQuery(window).width() > 1199) {
		jQuery('#tg-sectionscroll').fullpage({
			scrollingSpeed: 1500,
			sectionSelector: '.tg-sectioncontent',
			fixedElements: '#tg-header, #tg-footer',
		});
	}
	/* -------------------------------------
			PACKAGE SELECT
	-------------------------------------- */
	jQuery('.tg-selectplan, .tg-btnformpkghide').on('click', function(event){
		event.preventDefault();
		jQuery(this).parents('.tg-package').toggleClass('tg-formshow');
	});
	/* -------------------------------------
			ALERT POPUP
	-------------------------------------- */
	jQuery('body').addClass('tg-showpopup');
	jQuery('.close').on('click', function(){
		jQuery('body').removeClass('tg-showpopup');
	});
});
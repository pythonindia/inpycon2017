/* ---------------------------------------------------------------------- 
* Product Name: Color-Switcher-Plugin
* Product URI: http://shariarbd.com/demo/color-switcher-plugin/
* Author: Shariar
* Author URI: http://shariarbd.com/
* Description: Color Switcher plugin is a simple and easy to use plugin used to switch color of a site.
* Version: 1.0.0
* License: The MIT License (MIT)
* Tags: color switcher
* ---------------------------------------------------------------------- */

/* Styles Switcher
------------------------------------------------------------------------ */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"
	jQuery("ul.colors .color1" ).on('click', function(){
		jQuery("#colors" ).attr("href", "css/colors/default.css" );
		return false;
	});
	jQuery("ul.colors .color2" ).on('click', function(){
		jQuery("#colors" ).attr("href", "css/colors/color-2.css" );
		return false;
	});
	jQuery("ul.colors .color3" ).on('click', function(){
		jQuery("#colors" ).attr("href", "css/colors/color-3.css" );
		return false;
	});
	jQuery("ul.colors .color4" ).on('click', function(){
		jQuery("#colors" ).attr("href", "css/colors/color-4.css" );
		return false;
	});
	jQuery("ul.colors .color5" ).on('click', function(){
		jQuery("#colors" ).attr("href", "css/colors/color-5.css" );
		return false;
	});
	jQuery("#color-style-switcher .bottom a.settings").on('click', function(e){
		e.preventDefault();
		var div = jQuery("#color-style-switcher");
		if (div.css("left") === "-60px") {
			jQuery("#color-style-switcher").animate({
				left: "0"
			}); 
		} else {
			jQuery("#color-style-switcher").animate({
				left: "-60px"
			});
		}
	})
	jQuery("ul.colors li a").on('click', function(e){
		e.preventDefault();
		jQuery(this).parent().parent().find("a").removeClass("active");
		jQuery(this).addClass("active");
	})
});
jQuery('head').append('<link rel="stylesheet" id="colors" href="css/colors/default.css">');
jQuery('head').append('<link rel="stylesheet" href="css/color-switcher.css">'); 
jQuery('body').append('' + 
	'<div id="color-style-switcher">' +
		'<div>' + 
			'<ul class="colors">' +
				'<li><a class="color1 active" href="#"></a></li>' +
				'<li><a class="color2" href="#"></a></li>' +
				'<li><a class="color3" href="#"></a></li>' +
				'<li><a class="color4" href="#"></a></li>' +
				'<li><a class="color5" href="#"></a></li>' +
			'</ul>' +
		'</div>' +
		'<div class="bottom"> <a href="#" class="settings"></a> </div>' +
	'</div>' +
'');
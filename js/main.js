/* -------------------------------------
    CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
"use strict";
jQuery(document).on('ready', function() {
  /* -------------------------------------
      COLLAPSE MENU SMALL DEVICES
  -------------------------------------- */
  function collapseMenu(){
    jQuery('.menu-item-has-children').prepend('<span class="tg-dropdowarrow"><i class="icon-chevron-down"></i></span>');
    jQuery('.menu-item-has-children span').on('click', function() {
      jQuery(this).next().next().slideToggle(300);
      jQuery('.icon-chevron-down').toggleClass('icon-chevron-up');
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
    loop: false,
    dots: true,
    nav: true,
    autoplay: true,
    touchDrag: false,
    mouseDrag: false,
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
  _tg_upcomingeventcounter.countdown('2017/11/4', function(event) {
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
      // Changing the address from "New Delhi, India" to "SSCBS"
      address: "Shaheed Sukhdev College of Business Studies",
      // options: {
      //  title: "Bee Vibrant",
      //  icon: "images/map-marker2.png",
      // }
    },
    map: {
      options: {
        // Changing zoom from "12" to "16"
        zoom: 16,
        scrollwheel: false,
        // Changing disableDoubleClickZoom from "true" to "false"
        disableDoubleClickZoom: false,
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

  /*---------------------------------------
    SCHEDULE SECTION
  ---------------------------------------*/

  function getScheduleAndTracks() {
    schedule = {};
    tracks = {};

    $.ajax({
      //url: "/data/api/schedule.json", use this for testing
      url: "https://in.pycon.org/2017/data/api/schedule.json",
      async:false,
      success: function(response) {
      schedule = response;
      },
    });

    $.ajax({
      // url: "/data/api/tracks.json", // use this for testing
      url: "https://in.pycon.org/2017/data/api/tracks.json",
      async:false,
      success: function(response) {
      tracks = response;
      },
    });

    return {schedule: schedule, tracks: tracks};
  }

  var talk_count = 0;
  var DATE_ONE = "2017-10-02";
  var DATE_TWO = "2017-10-03";
  var DATE_THREE = "2017-10-04";
  var DATE_FOUR = "2017-10-05";
  var API_VERSION = "0.0.1";
  var response = getScheduleAndTracks();
  var schedule = response.schedule[API_VERSION][0];
  var track_halls = response.schedule[API_VERSION][0]["tracks"];
  var tracks = response.tracks[API_VERSION][0];
  var day_1_schedule = schedule[DATE_ONE];
  var day_2_schedule = schedule[DATE_TWO];
  var day_3_schedule = schedule[DATE_THREE];
  var day_4_schedule = schedule[DATE_FOUR];
  var row_names = [["one", "two", "three", "four", "five"],
                   ["six", "seven", "eight", "nine", "ten"],
                   ["eleven", "twelve", "thirteen", "fourteen", "fifteen", ],
                   ["sixteen", "seventeen", "eighteen", "nineteen", "twenty"]];

  function updateSchedule() {
    /* Uncomment these lines to make schedule work */
    updateScheduleForADay(day_1_schedule, tracks, $("#day-one .tab-content"), row_names[0]);
    updateScheduleForADay(day_2_schedule, tracks, $("#day-two .tab-content"), row_names[1]);
    updateScheduleForADay(day_3_schedule, tracks, $("#day-three .tab-content"), row_names[2]);
    updateScheduleForADay(day_4_schedule, tracks, $("#day-four .tab-content"), row_names[3]);
    updateTrackHall(track_halls, '.track-hall');
    addToggleDescriptionListener();
  }

  function updateScheduleForADay(schedule, tracks, table_body, row_names) {
    var schedule_rows = [[], [], [], [], []];
    for (var i = 0; i < schedule.length; i++) {
      var talk_id = schedule[i].talk_id;
      var entity_details = schedule[i];
      var title = entity_details.title;
      var description = tracks[talk_id].description;
      var speaker_name = tracks[talk_id].hasOwnProperty('speaker') ? tracks[talk_id].speaker.name : '';
      var time_duration = entity_details.start_time + ' - ' + entity_details.end_time;
      var display_title = speaker_name !== '' && typeof speaker_name !== 'undefined' ? title + ' by ' + speaker_name : title;
      var current_day_track = schedule[i].track;

      var each_row = [time_duration, display_title, speaker_name, description, talk_id];

      if (current_day_track == 'all' || typeof current_day_track == "undefined") {
        schedule_rows[0].push(each_row);
        schedule_rows[1].push(each_row);
        schedule_rows[2].push(each_row);
        schedule_rows[3].push(each_row);
        schedule_rows[4].push(each_row);
      }
      else if (current_day_track == '1') {

        schedule_rows[0].push(each_row);
      } else if (current_day_track == '2') {
        schedule_rows[1].push(each_row);
      } else if (current_day_track == '3') {
        schedule_rows[2].push(each_row);
      } else if (current_day_track == '4') {
        schedule_rows[3].push(each_row);
      } else {
        schedule_rows[4].push(each_row);
      }
    }
    insertTableRows(table_body, schedule_rows, row_names);
  }

  function insertTableRows(table, rows, row_names) {
    var row_html = '';
    var row_no = 0;
    $(rows).each(function() {
      var row = $(this);
      row_html += (row_no == 0)? '<div role="tabpanel" class="tab-pane active" id="hall-'+ row_names[row_no] +'">':  '<div role="tabpanel" class="tab-pane" id="hall-'+ row_names[row_no] +'">';
      if (row_names[row_no] == "fifteen" || row_names[row_no] == "twenty") {
        row_html += `
      <div class="tg-event">
        <div class="tg-eventspeaker">
          <div class="tg-contentbox">
            <div class="tg-eventhead">
            <div class="tg-leftarea">
              <time datetime="2017-12-12">08:00 - 09:00</time>
              <div class="tg-title">
                <h2>Registration</h2>
              </div>
            </div>
            <!--<div class="tg-rightarea">
              <a class="tg-btnfarword" href="#"><i class="fa fa-mail-forward"></i></a>
            </div>-->
          </div>
            <div class="tg-speakername">
              <h2> </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="tg-event">
        <div class="tg-eventspeaker">
          <div class="tg-contentbox">
            <div class="tg-eventhead">
            <div class="tg-leftarea">
              <time datetime="2017-12-12">09:30 - 17:30</time>
              <div class="tg-title">
                <h2>Child Care</h2>
              </div>
            </div>
            <!--<div class="tg-rightarea">
              <a class="tg-btnfarword" href="#"><i class="fa fa-mail-forward"></i></a>
            </div-->
          </div>
            <div class="tg-speakername">
              <h2> </h2>
            </div>
          </div>
        </div>
      </div>`
      } else {
        $(row).each(function() {
          var nrow = $(this);
          row_html += `<div class="tg-event">
                        <div class="tg-eventspeaker">
                          <div class="tg-contentbox">
                            <div class="tg-eventhead">
                            <div class="tg-leftarea">
                              <time datetime="2017-12-12">`+ nrow[0] + `</time>
                              <div class="tg-title talk_id "  data-id='talk` + nrow[4] + `' >
                              <h2>` + nrow[1] + `</h2>
                            </div>
                            
                            <div class="tg-description" id='desc` + nrow[4] + `'>
                             ` + nrow[3] + `
                             
                            </div> 
                            </div>
                            <!--<div class="tg-rightarea">
                              <a class="tg-btnfarword" href="#"><i class="fa fa-mail-forward"></i></a>
                            </div>-->
                          </div>
                            <div class="tg-speakername">
                              <h2>`+ nrow[2] +`</h2>
                            </div>
                          </div>
                        </div>
                      </div>`
        });
      }
      row_html += '</div>';
      row_no += 1;
      });
    $(table).append(row_html);
  }

  function updateTrackHall(track_halls, selector) {
      track_halls.forEach(function(element, index) {
          $($(selector)[index]).html(element);
      });
  }

  updateSchedule();

});

/*---------------------------------------
TALK DESCRIPTION TOGGLE SECTION
---------------------------------------*/
function addToggleDescriptionListener() {
  $('.tg-contentbox').on("click", function (event) {
    $(this).find('.tg-description').slideToggle();
  });
}

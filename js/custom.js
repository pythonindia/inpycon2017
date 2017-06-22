jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#nav-sidebar', offset: 400});


    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        e.preventDefault();

        //store hash
        var target = this.hash;
        if($(target).length > 0) {
            $('body').scrollTo(target, {
                'axis':'y',
                duration: 700,
                easing:'easeOutQuad'
            });
        } else {
            window.location.href = "/"+target;
        }
    });
    // Set correct active class on page navigation.
    set_active_nav();

    // Set height of speaker box to be equal
    $('.speaker-box').matchHeight();
    $('.speaker-box > .pybox').matchHeight();
});

function set_active_nav() {
    var path = window.location.pathname;

    // Remove the forward slash and base url in front of path name
    path = path.replace(/^\/2016\//, '');
    $('#nav-sidebar a[href="'+ path +'"]').parent().addClass('active');
}

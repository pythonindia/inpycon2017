
$('document').ready(function(){
    /* Change feed url to '/data/text.xml' for testing on local server */
    feedUrl = '/blog/feeds/2017.atom.xml';
    $.get(feedUrl, function(data) {
      blogs = data.getElementsByTagName("entry");

      for(var x=0; x < blogs.length; x++) {
        title = blogs[x].getElementsByTagName("title")[0].innerHTML;
        link = blogs[x].getElementsByTagName("link")[0].attributes["href"].value;
        date = blogs[x].getElementsByTagName("published")[0].innerHTML.split("T")[0];  
        reg = /<p>\w*.*<\/p>/ 
        text = $.parseHTML(blogs[x].getElementsByTagName("summary")[0].innerHTML);
        text = reg.exec(text[0]["data"])[0];
        
        
        $('#blogBlock')[0].innerHTML = $('#blogBlock')[0].innerHTML + `
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <article class="tg-post tg-themepost">
            <div class="tg-postcontent">
                <div class="tg-posttitle">
                    <h3><a href="`+ link +`">`+ title +`</a></h3>
                </div>
                <div class="tg-description">
                    `+ text +`
                    <a href="`+ link +`">contiue reading...</a>
                </div>
                <div class="tg-posthead">
                    <h5>Published : `+ date +`</h5>
                </div>
            </div>
            </article>
        </div>`;

      }
    });
});
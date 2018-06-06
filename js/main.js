var widthBr = $(window).width();

$(document).ready(function() {
    if (widthBr < 640) {
        var posScroll = 0;
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
        });
    }
});

/* Resize swap images
-------------------------------------- */
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 768) {
        var posScroll = 0;
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
        });
    } else {
        var posScroll = 100;
        $('img').each(function() {
            $(this).attr("src", $(this).attr("src").replace('_sp', '_pc'));
        });
    }
});

$(window).on('load', function() {
    $('.local_02 .title_h5').matchHeight();
    $('.local_02 .items .text').matchHeight();
});

/* Scrool bookmark
-------------------------------------- */
$('a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 1000);
    return false;
});

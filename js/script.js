
$(document).ready(function() {

    adjustFloatElementHeight();

    $('header .nav li').hover(function(){
        $('ul:first', this).stop().slideDown(100);
    }, function(){
        $('ul:first', this).stop().slideUp(100);
    });


    $("#slidingMenuContent li a").on( "click", function() {

        if ($(this).parent().hasClass('closed')) {

            $(this).parent().removeClass('closed');
            $(this).parent().addClass('opened');
            $(this).parent().find('ul').slideDown(100);

        } else if ($(this).parent().find('ul').length > 0) {

            $(this).parent().addClass('closed');
            $(this).parent().removeClass('opened');
            $(this).parent().find('ul').slideUp(100);

        }
    });

});

$(window).resize(function() {
    adjustFloatElementHeight();
});


function adjustFloatElementHeight()
{
    var parentHeightHome = $('.home-widget .inner').height();
    if ($('.home-widget .inner > div.col-onethird').css('float') != 'none') {
        $('.home-widget .inner > div.col-onethird .content-box').height(parentHeightHome-54);
    } else {
        $('.home-widget .inner > div.col-onethird .content-box').height('auto');
    }


    var parentHeightSidebarLayout = $('.layout-sidebar .inner').height();
    if ($('.layout-sidebar .inner > article').css('float') != 'none') {
        $('.layout-sidebar .inner > article .content-box').height(parentHeightSidebarLayout-54);
    } else {
        $('.layout-sidebar .inner > article .content-box').height('auto');
    }
    if ($('.layout-sidebar .inner > aside').css('float') != 'none') {
        $('.layout-sidebar .inner > aside .content-box').height(parentHeightSidebarLayout-54);
    } else {
        $('.layout-sidebar .inner > aside .content-box').height('auto');
    }
}
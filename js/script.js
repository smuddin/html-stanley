
$(document).ready(function() {

    /*var parentHeightHome = $('.home-widget .inner').height();
    $('.home-widget .inner > div').height(parentHeightHome);

    var parentHeightSidebarLayout = $('.layout-sidebar .inner').height();
    $('.layout-sidebar .inner > article, .layout-sidebar .inner > aside').height(parentHeightSidebarLayout);*/

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
            console.log($(this).parent().find('ul'));

        }
    });

});
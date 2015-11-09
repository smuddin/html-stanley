
$( document ).ready(function() {

    /*var parentHeightHome = $('.home-widget .inner').height();
    $('.home-widget .inner > div').height(parentHeightHome);

    var parentHeightSidebarLayout = $('.layout-sidebar .inner').height();
    $('.layout-sidebar .inner > article, .layout-sidebar .inner > aside').height(parentHeightSidebarLayout);*/


    $('header .nav li').hover(function(){
        $('ul:first', this).stop().slideDown(100);
    }, function(){
        $('ul:first', this).stop().slideUp(100);
    });

});


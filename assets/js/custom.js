$(document).ready(function() {

    //nav toggle slides up and down
    $('.nav-toggle').click(function(event){
        event.preventDefault();
        $('.nav-collapse').slideToggle('slow');
    });



    //nav toggle slides up with you click a project
    $('.nav-button').click(function(){
            $('.nav-collapse').slideUp('slow');
     });

    var num = 0; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.nav-zone').addClass('fixed');
        } else {
            $('.nav-zone').removeClass('fixed');
        }
    });

    // Slideshow

    $('.slideshow-prev').click(function(event) {
        $('.jumbotron').jcarousel('scroll', '-=1')
    });
    $('.slideshow-next').click(function(event) {
        $('.jumbotron').jcarousel('scroll', '+=1')
    });

    window.carousel = $('.jumbotron').jcarousel({
        wrap: 'circular'
    });

    // Jumbotron footer delete

    $('.jumbotron-footer').click(function(event){
        $(this).hide();
    });

});



/*        $('body').css('padding-top','500px'); */
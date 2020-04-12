$(function() {
    menu = $('nav ul');

    $('#toggle-btn').on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(this).width();
        if(w > 580 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function(e) {
        var w = $(window).width();
        if(w < 580) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});

function fadeOut() {

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0,
    });

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".overlay-2", 2, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".content", 2, {
        delay: 3.2,
        opacity: 0,
        ease: Power2.easeInOut,
    });

    TweenMax.to(".content", 2, {
        opacity: 1,
        y: -300,
        delay: 3.2,
        ease: Power2.easeInOut
    });
}
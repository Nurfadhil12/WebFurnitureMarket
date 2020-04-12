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

$(document).ready(function() {
    $(".login-form").hide();
    $(".login").css("background","none");

    $(".login").click(function(){
        $(".signup-form").hide();
        $(".login-form").show();
        $(".signup").css("background","none");
        $(".login").css("background","#fff");
    })

    $(".signup").click(function(){
        $(".login-form").hide();
        $(".signup-form").show();
        $(".login").css("background","none");
        $(".signup").css("background","#fff");
    })
});
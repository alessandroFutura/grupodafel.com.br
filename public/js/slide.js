$(document).ready(function(){
    Home.slideHeight();
    $(window).on('resize',function () {
        Home.slideHeight();
    });
});

Home = {
    factor: 0.45,
    slideHeight: function () {
        $('.carousel-item').css('height',$(window).width()*Home.factor);
    }
};
$(document).ready(function(){
    Home.slideHeight();
    $(window).on('resize',function () {
        Home.slideHeight();
    });
});

Home = {
    factor: 0.4,
    slideHeight: function () {
        $('.carousel-item').css('height',$(window).width()*Home.factor);
    }
};
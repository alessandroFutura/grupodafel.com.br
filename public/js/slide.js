$(document).ready(function(){
    Home.slideHeight();
    $(window).on('resize',function () {
        Home.slideHeight();
    });
});

Home = {
    slideHeight: function () {
        $('.slide').css('height',$(window).height());
    }
};
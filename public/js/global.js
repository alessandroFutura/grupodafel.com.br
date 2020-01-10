$(document).ready(function(){
    Global.headerBackground();
    $(document).on('scroll',function(){
        Global.headerBackground();
    });
});

Global = {
    scrollTop: 0,
    headerBackground: function(){
        Global.scrollTop = $(document).scrollTop();
        $('header').css({
            'background-color': 'rgba(0,0,0,' + (Global.scrollTop/200) + ')'
        });
    }
};
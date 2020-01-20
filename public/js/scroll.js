$('.menu a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log($(this).attr('href'));
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    },1000);
});
$("#button-filter").on('click',function(){
    $('#page-filter').toggleClass('visible');
    $('body').toggleClass('fixed-bottom-filter');
}); //Efeito de abrir filtro mobile//

$("#button-filter-close").on('click',function(){
    $('#page-filter').removeClass('visible');
    $('body').removeClass('fixed-bottom-filter');
}); //Efeito de fechar filtro mobile//
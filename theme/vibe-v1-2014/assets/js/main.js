$(document).ready(function () {

    //$('.item-list-page img').addClass('img-responsive');

    $(".tile-item").hover(function () {
        $(this).find(".descricao").animate({
            height: "toggle"
        }, 100, function () {
        });
    });

    $(".menu-lateral-main > ul > li").hover(
            function () {
                $(this).find(".menu-categorias").show();
            },
            function () {
                $(this).find(".menu-categorias").hide();
            }
    );

    //Inicializa o popup do bolt para lightbox de imagens
    $('.magnific, div.imageholder a').magnificPopup({
        type: 'image'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    seeThru.create('#videoAlfa', {
        mask: '#imgAlfaMask'
    });
});
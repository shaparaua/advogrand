$(document).ready(function () {
    $('.partners__slider').slick({
        infinite: true
        , slidesToShow: 3
        , slidesToScroll: 3
    });
});

$(document).ready(function () {
    $('.reviews__slider').slick({
        infinite: true
        , slidesToShow: 3
        , slidesToScroll: 3
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        const headerOffset = $('#header--header').offset().top;
        const scrolled = $(this).scrollTop();
            if (scrolled > headerOffset) {
                //шапка прилипла
                $('#wrapper').addClass('header-fixed');
            } else if (scrolled < headerOffset) {
                //шапка отлипла
                $('#wrapper').removeClass('header-fixed');
            }
        console.log(headerOffset);
        console.log(scrolled);
    });
});

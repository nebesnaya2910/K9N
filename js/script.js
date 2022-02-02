$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        draggable: false,
        swipe: true,
        lazyLoad: 'ondemand',


    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .navbar-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
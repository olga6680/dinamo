window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

$(document).ready(function() {
    $('.carousel__inner').slick({
        centerMode: true,
        addaptiveHeight: true,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        }, ]
    });

    $('.galery-slick').slick({
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots'
    });
});
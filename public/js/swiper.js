const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swipe-right',
        prevEl: '.swipe-left'
    },
    breakpoints: {
        600: {
            loop: false,
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 50
        },

    }
});
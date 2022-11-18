//Инициализация swiper
const swiperBrands = new Swiper('.brands-swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiperBrands.destroy(true, true);
            }
        },
    },
    observer: true,
});
jQuery(document).ready(function () {

    // Testimonial Slider
    new Swiper('.testimonialSliderOuter .swiper', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".testimonialSliderOuter .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".slider-nav .swiper-button-next",
            prevEl: ".slider-nav .swiper-button-prev",
        },
    });



});
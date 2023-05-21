new Swiper(".comments-container", {
    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 33,

    breakpoints: {
        840: {
            slidesPerView: 3
        }
    }
})
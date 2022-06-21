new Swiper(".stocks-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerInsufficientSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1560: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

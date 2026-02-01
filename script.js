new Swiper('.swiper', {
  slidesPerView: 1,
  grabCursor: true,
  resistanceRatio: 0.6,

  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: ['-100%', 0, -300],
      rotate: [0, 0, -8],
      opacity: 0.7,
    },
    next: {
      translate: ['100%', 0, -300],
      rotate: [0, 0, 8],
      opacity: 0.7,
    },
  },
});

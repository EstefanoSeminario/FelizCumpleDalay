// Inicializar Swiper
const swiper = new Swiper('.swiper', {
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

// ---- MÚSICA DE FONDO ----
const music = document.getElementById('bgMusic');
let musicStarted = false;

// Reproducir música al primer clic en el Swiper
swiper.el.addEventListener('click', () => {
  if (!musicStarted) {
    music.play().catch(err => console.log('Autoplay bloqueado hasta interacción'));
    musicStarted = true;
  }
});

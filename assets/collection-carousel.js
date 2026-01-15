document.addEventListener('DOMContentLoaded', () => {
  const carouselEl = document.querySelector('[data-collection-carousel]');
  if (!carouselEl) return;

  const slides = carouselEl.querySelectorAll('.swiper-slide');
  if (slides.length <= 1) return;

  new Swiper(carouselEl, {
    slidesPerView: 1,
    spaceBetween: 16,
    watchOverflow: true,
    breakpoints: {
      768: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 6
      }
    }
  });
});

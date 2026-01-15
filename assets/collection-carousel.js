const initCollectionCarousel = () => {
  const carouselContainer = document.querySelector('[data-collection-carousel]');

  if (carouselContainer) {
    new Swiper(carouselContainer, {
      slidesPerView: 1.2,
      spaceBetween: 16,
      grabCursor: true,
      navigation: {
        nextEl: '[data-carousel-next]',
        prevEl: '[data-carousel-prev]',
      },
      watchOverflow: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24
        }
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', initCollectionCarousel);

document.addEventListener('shopify:section:load', () => {
  initCollectionCarousel();
});
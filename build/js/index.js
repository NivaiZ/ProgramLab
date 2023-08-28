function swiperSlider () {
  const swiperElement = document.querySelector('.situations__sliders.swiper');
  console.log(swiperElement);
  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 1,
      centeredSlides: true,
      width: 120,
      grabCursor: true,
      spaceBetween: 12,
    });
  }
}

addEventListener("DOMContentLoaded", swiperSlider);

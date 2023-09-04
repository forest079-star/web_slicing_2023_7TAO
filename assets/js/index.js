import Swiper from 'swiper/bundle';

const albumsSwiper = new Swiper('.albums-swiper', {
  slidesPerView: 'auto',
  speed: 10000,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});


// modal
  const registerBtn = document.querySelector('#registerBtn');
  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
  });





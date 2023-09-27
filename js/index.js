var swiper = new Swiper(".reviewSwiper", {
    slidesPerView: "1.8",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



document.querySelector('.header_burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-bar').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
})
let menuBtn = document.querySelector('.header__menu button');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
   menu.classList.toggle('active');
})
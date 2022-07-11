const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// const counters = document.querySelectorAll('.skills__ratings-counter'),
//       lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML;
// });
// Скролл кнопки
const scrollBtn = document.getElementById('btn-scroll');
// console.log(portfolio_scroll);
scrollBtn.addEventListener('click', handleButtonClick);
function handleButtonClick() {
    BlockPortfolio.scrollIntoView({block: "start", behavior: "smooth"});
 }
 const BlockPortfolio = document.getElementById('portfolio_scroll');
//  Прогресс бар
 window.onscroll = function(e) {
    e = window.pageYOffset;
    if (e >= 100) {
      move();
    }

    function move() {
        let line = document.getElementById('progres_bar');
        let width = 0;
        let interval = setInterval(frame, 20);

      function frame() {
        if (width >= 90) {
          clearInterval(interval);
        } else {
          width++;
          line.style.width = width + '%';
         
        }
    }

 }

};
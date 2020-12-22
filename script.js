let mainMenu = document.querySelector('.menu');
let mainHamburger = document.querySelector('.hamburger');
let menuLinks = document.querySelectorAll('.scrolls');

mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle("menu--active");
})
mainHamburger.addEventListener('click', () => {
    mainHamburger.classList.toggle("hamburger--active");
})


for (let menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        let scrollToElem = menuLink.getAttribute('href');
        let coordinates = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinates-100,
            behavior: 'smooth'
        })
    })
}

$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
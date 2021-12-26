// Блок 1.4
let bodySection = document.querySelector("body");
let mainSection = document.querySelector(".main-section");
let pageSection = document.querySelector(".page");


let showAsideMenu = document.querySelector(".page__burger-menu");
let asideMenuBlock = document.querySelector(".aside-menu");
let asideMenuX = document.querySelector(".aside-menu__x");

showAsideMenu.addEventListener('click', function () {
  asideMenuBlock.classList.remove('aside-menu__unvisible');
  asideMenuBlock.classList.add('aside-menu__visible');
  bodySection.classList.add("overflow-hidden");
  mainSection.classList.add("body-blur");
});

asideMenuX.addEventListener('click', function () {
  asideMenuBlock.classList.remove('aside-menu__visible');
  asideMenuBlock.classList.add('aside-menu__unvisible');
  bodySection.classList.remove("overflow-hidden");
  mainSection.classList.remove("body-blur");
});


let showPopupCall = document.querySelector(".aside-menu__call");
let popupCallBlock = document.querySelector(".popup-call");
let popupCallClose = document.querySelector(".popup-call__close");
let showPopupCallByPagePhone = document.querySelector(".page-phone");


showPopupCall.addEventListener('click', function() {
  popupCallBlock.classList.remove('popup-call__unvisible');
  popupCallBlock.classList.add('popup-call__visible');
  asideMenuBlock.classList.remove('aside-menu__visible');
  asideMenuBlock.classList.add('aside-menu__unvisible');
  bodySection.classList.add("overflow-hidden");
  asideMenuBlock.classList.add("body-blur");
  mainSection.classList.add("body-blur");
});

popupCallClose.addEventListener('click', function () {
  popupCallBlock.classList.remove('popup-call__visible');
  popupCallBlock.classList.add('popup-call__unvisible');
  bodySection.classList.remove("overflow-hidden");
  asideMenuBlock.classList.remove("body-blur");
  mainSection.classList.remove("body-blur");
});

showPopupCallByPagePhone.addEventListener('click', function() {
  popupCallBlock.classList.remove('popup-call__unvisible');
  popupCallBlock.classList.add('popup-call__visible');
  asideMenuBlock.classList.remove('aside-menu__visible');
  asideMenuBlock.classList.add('aside-menu__unvisible');
  bodySection.classList.add("overflow-hidden");
  asideMenuBlock.classList.add("body-blur");
  mainSection.classList.add("body-blur");
});


let showPopupFeedback = document.querySelector(".aside-menu__chat");
let popupFeedbackBlock = document.querySelector(".popup-feedback");
let popupClose = document.querySelector(".popup-feedback__close");
let showPopupFeedbackByPageChat = document.querySelector(".page-chat");

showPopupFeedback.addEventListener('click', function () {
  popupFeedbackBlock.classList.remove('popup-feedback__unvisible');
  popupFeedbackBlock.classList.add('popup-feedback__visible');
  asideMenuBlock.classList.remove('aside-menu__visible');
  asideMenuBlock.classList.add('aside-menu__unvisible');
  bodySection.classList.add("overflow-hidden");
  asideMenuBlock.classList.add("body-blur");
  mainSection.classList.add("body-blur");
});

popupClose.addEventListener('click', function () {
  popupFeedbackBlock.classList.remove('popup-feedback__visible');
  popupFeedbackBlock.classList.add('popup-feedback__unvisible');
  bodySection.classList.remove("overflow-hidden");
  asideMenuBlock.classList.remove("body-blur");
  mainSection.classList.remove("body-blur");
});

showPopupFeedbackByPageChat.addEventListener('click', function () {
  popupFeedbackBlock.classList.remove('popup-feedback__unvisible');
  popupFeedbackBlock.classList.add('popup-feedback__visible');
  asideMenuBlock.classList.remove('aside-menu__visible');
  asideMenuBlock.classList.add('aside-menu__unvisible');
  bodySection.classList.add("overflow-hidden");
  asideMenuBlock.classList.add("body-blur");
  mainSection.classList.add("body-blur");
});

let showAllText = document.querySelector(".about-us__more");
let allText = document.querySelector(".about-us__text");
let hideAllText = document.querySelector(".about-us__less");

showAllText.addEventListener('click', function () {
    allText.classList.toggle("show-text");
    showAllText.classList.toggle("about-us__more");
    showAllText.classList.toggle("about-us__less");
});


let showAllBrands = document.querySelector(".brands-logo-table__more");
let hideAllBrands = document.querySelector(".brands-logo-table__less");
let hiddenBrands = document.querySelectorAll(".hidden-brands")

showAllBrands.addEventListener('click', function () {
    showAllBrands.classList.toggle("brands-logo-table__more");
    showAllBrands.classList.toggle("brands-logo-table__less");

    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.toggle("hidden-brands");
        hiddenBrands[i].classList.toggle("show-hidden-brands");
    }
});


let showAlltech = document.querySelector(".tech-logo-table__more");
let hideAlltech = document.querySelector(".tech-logo-table__less");
let hiddentech = document.querySelectorAll(".hidden-tech");

showAlltech.addEventListener("click", function () {
  showAlltech.classList.toggle("tech-logo-table__more");
  showAlltech.classList.toggle("tech-logo-table__less");

  for (let i = 0; i < hiddentech.length; i++) {
    hiddentech[i].classList.toggle("hidden-tech");
    hiddentech[i].classList.toggle("show-hidden-tech");
  }
});


    let mobile = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
            let swiperFirst= Swiper;
            swiperFirst = new Swiper('.swiper-first', {
                slidesPerView: "auto",
                effect: 'coverflow',
                centeredSlides: true,
                loop: true,
                direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination-first',
    },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },
            });

            let swiperSecond= Swiper;
            swiperSecond = new Swiper('.swiper-second', {
                slidesPerView: "auto",
                effect: 'coverflow',
                centeredSlides: true,
                loop: true,
                direction: 'horizontal',
  
    pagination: {
        el: '.swiper-pagination-second',
    },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },
            });

            let swiperThird= Swiper;
            swiperThird = new Swiper('.swiper-third', {
                slidesPerView: "auto",
                effect: 'coverflow',
                centeredSlides: true,
                loop: true,
                direction: 'horizontal',
  
    pagination: {
        el: '.swiper-pagination-third',
    },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },
            });


          }
    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
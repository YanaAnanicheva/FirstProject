let swiper= Swiper;
let init = false;
/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                slidesPerView: 2,
                effect: 'coverflow',
                centeredSlides: true,
                loop: true,
                spaceBetween: 10,
                direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
    },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },

                breakpoints: {

                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'coverflow',

                        coverflowEffect: {
                            rotate: 0,
                            stretch: 20,
                            depth: 120,
                            modifier: 3,
                            slideShadows: false,
                        }
                    }

                }

            });
        }

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
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});


let showAllBrands = document.querySelector(".brands-logo-table__more");
let hideAllBrands = document.querySelector(".brands-logo-table__less");
let hiddenBrands = document.querySelectorAll(".hidden-brands")

showAllBrands.addEventListener('click', function () {
    showAllBrands.classList.remove("show");
    hideAllBrands.classList.add("display-block");


    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.remove("hidden-brands");
        hiddenBrands[i].classList.add("show-hidden-brands");
    }
});

hideAllBrands.addEventListener('click', function () {
    showAllBrands.classList.add("show");
    hideAllBrands.classList.remove("display-block");

    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.add("hidden-brands");
        hiddenBrands[i].classList.remove("show-hidden-brands");
    }
});
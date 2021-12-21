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
                slidesPerView: "auto",
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
let hiddenBrands = document.querySelectorAll(".hidden-brands")
let hideAllBrands = document.querySelector(".brands-logo-table__less");

showAllBrands.addEventListener('click', function () {
    showAllBrands.classList.toggle("brands-logo-table__more");
    showAllBrands.classList.toggle("brands-logo-table__less");

    for (let i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.toggle("hidden-brands");
        hiddenBrands[i].classList.toggle("show-hidden-brands");
    }
});

// hideAllBrands.addEventListener('click', function () {
//     showAllBrands.classList.remove("brands-logo-table__less");
//     showAllBrands.classList.add("brands-logo-table__more");
//
//
//     for (let i = 0; i < hiddenBrands.length; i++) {
//         hiddenBrands[i].classList.add("hidden-brands");
//         hiddenBrands[i].classList.remove("show-hidden-brands");
//     }
// });
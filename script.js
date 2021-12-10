// const swiper = new Swiper('.swiper', {
//
//
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     centeredSlides: true,
//
// });

let swiper= Swiper;
let init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
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

                    767: {
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

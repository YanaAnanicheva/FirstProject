let showAllText = document.querySelector(".about-us__more");
let allText = document.querySelector(".about-us__text");
let hideAllText = document.querySelector(".about-us__less")


showAllText.addEventListener('click', function () {
    allText.classList.toggle("show-text");
    showAllText.classList.toggle("hide-text");
    hideAllText.classList.toggle("hide-text");
});

hideAllText.addEventListener('click', function () {
    allText.classList.toggle("show-text");
    showAllText.classList.toggle("hide-text");
    hideAllText.classList.toggle("hide-text");
});

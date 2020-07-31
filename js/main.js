// JAVASCRIPT START
(() => {
console.log('fired!');

let welcomeVideo = document.getElementById('videoSplash'),
    burgerButton = document.querySelector('#burgerButton');

function playVideo() {
    if (welcomeVideo.paused) {
    welcomeVideo.play();
    }
}

function burgerMenuExpand(){
    document.querySelector('#burgerNav').classList.toggle('hidden');
    document.querySelector('#burgerButton').classList.toggle('closeBurger');
}

function scrollClose() {
    if (document.querySelector('#burgerNav').classList.contains('hidden'))
    return;
    document.querySelector('#burgerNav').classList.toggle('hidden');
    document.querySelector('#burgerButton').classList.toggle('closeBurger');
}

window.addEventListener('load', playVideo);
window.addEventListener('scroll', scrollClose);
burgerButton.addEventListener('click', burgerMenuExpand);
})();
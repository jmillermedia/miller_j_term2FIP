// JAVASCRIPT START
(() => {
console.log('fired!');

let burgerButton = document.querySelector('#burgerButton'),
    toTopButton = document.querySelector('#toTop');

//expand the burger menu on button click
function burgerMenuExpand(){
    document.querySelector('#burgerNav').classList.toggle('hidden');
    document.querySelector('#burgerButton').classList.toggle('closeBurger');
}

// close the burger menu if the user scrolls
function scrollClose() {
    if (document.querySelector('#burgerNav').classList.contains('hidden'))
    return;
    document.querySelector('#burgerNav').classList.toggle('hidden');
    document.querySelector('#burgerButton').classList.toggle('closeBurger');
}

// scroll to the very top of the document
function scrollToTop() {
    window.scrollTo(0, 0);
}

// event handelers 
window.addEventListener('scroll', scrollClose);
burgerButton.addEventListener('click', burgerMenuExpand);
toTopButton.addEventListener('click', scrollToTop);
})();
// JAVASCRIPT START
(() => {
console.log('fired!');

let burgerButton = document.querySelector('#burgerButton'),
    mobileAwardPic = document.querySelector('#mobileAwardPic'),
    toTopButton = document.querySelector('#toTop'),
    prevAward = document.querySelector('.prev'),
    nextAward = document.querySelector('.next'),
    awardName = document.querySelector('.awardName'),
    awardInfo = document.querySelector('.awardInfo'),
    activeDot = document.querySelectorAll('.dot');

const awardWriteup = [
    [`Outstanding Olefactory Award`, `Awarded in Banff, Alberta, the Outstanding Olfactory Award is awarded to products that excel at "making the world smell better, one product at a time". It is an honour to be presented with this award as we take pride in creating a product that will provide fresh scents in the most exiting way. We share this award with our sister company, Renuzit® Brand Snuggle®, who have won many times in the past. Let it serve as our commitment to providing only the freshest scents through our beer!`],
    [`Food Innovation Award`, `The Food Innovation Award is awarded to products that take food creation and consumption to the next level. Only the most innovative food presentation and production processes are given this award, so we take pride in receiving this award in Toronto, Ontario in 2020. We stand by our new product and the guarantee that it will keep your clothes smelling fresh for as long you you're enjoying it!`],
    [`Brewery Of The Month Award`, `The prestigious Brewery Of The Year Award is given to breweries of the highest quality. With such competitors as Labatts, Coors, Molson, and the like, we were ecstatic to receive this award presented in Montreal, Quebec. While it's set the bar for our quality, it also motivates us to continue providing beer of the utmost quality, held to the highest standards. This award has put us on the world stage, and we intend on continues to provide those standards to the beer drinkers of the world!`]
]

// initialize awards to show the first award
function initAward() {
mobileAwardPic.src = `images/award0.svg`
awardName.textContent = `${awardWriteup[0][0]}`;
awardInfo.textContent = `${awardWriteup[0][1]}`;
}

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

// advance text from awardWriteup
function nextAwardSlide(i) {
    for (let i = 0; i < awardWriteup.length; i++)
    mobileAwardPic.src = `images/award${awardWriteup.length += i}.svg`
    awardName.textContent = `${awardWriteup[awardWriteup.length += i]}`;
    awardInfo.textContent = `${awardWriteup[awardWriteup.length += i]}`;
}

// revert text and image
function prevAwardSlide() {
    awardName.textContent = `${awardWriteup[awardWriteup.length -= 1]}`;
    awardInfo.textContent = `${awardWriteup[awardWriteup.length -= 1]}`;
}

// choose award from dots below
function chooseAward() {
    awardName.textContent = `${awardWriteup[this.data.offset][0]}`
}


// event handelers 
window.addEventListener('scroll', scrollClose);
burgerButton.addEventListener('click', burgerMenuExpand);
toTopButton.addEventListener('click', scrollToTop);
nextAward.addEventListener('click', nextAwardSlide);
prevAward.addEventListener('click', prevAwardSlide);

activeDot.forEach(dot => dot.addEventListener('click', chooseAward));
})();


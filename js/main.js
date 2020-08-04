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
    aromaType = document.querySelector('#aromaType'),
    aromaWriteup = document.querySelector('.aromaWriteup'),
    beerBottle = document.querySelector('#beerBottle'),
    activeDot = document.querySelectorAll('.dot'),
    aromaButton = document.querySelectorAll('.aromaButton');

const awardWriteup = [
    [`Outstanding Olefactory Award`, `Awarded in Banff, Alberta, the Outstanding Olfactory Award is awarded to products that excel at "making the world smell better, one product at a time". It is an honour to be presented with this award as we take pride in creating a product that will provide fresh scents in the most exiting way. We share this award with our sister company, Renuzit® Brand Snuggle®, who have won many times in the past. Let it serve as our commitment to providing only the freshest scents through our beer!`],
    [`Food Innovation Award`, `The Food Innovation Award is awarded to products that take food creation and consumption to the next level. Only the most innovative food presentation and production processes are given this award, so we take pride in receiving this award in Toronto, Ontario in 2020. We stand by our new product and the guarantee that it will keep your clothes smelling fresh for as long you you're enjoying it!`],
    [`Brewery Of The Month Award`, `The prestigious Brewery Of The Year Award is given to breweries of the highest quality. With such competitors as Labatts, Coors, Molson, and the like, we were ecstatic to receive this award presented in Montreal, Quebec. While it's set the bar for our quality, it also motivates us to continue providing beer of the utmost quality, held to the highest standards. This award has put us on the world stage, and we intend on continues to provide those standards to the beer drinkers of the world!`]
]

const aromaChoice = [
    [`SuperFresh Original`, `Dash away stink and welcome in snuggly freshness with scents of clean laundry and bright floral notes. Make your beer make you SuperFresh, especially in smaller spaces like lounges and pubs, with BECK’S® & Renuzit® Snuggle® SuperFresh Original.`],
    [`Linen Escape`, `Get the perks of laundry day without having to do any laundry. The BECK’S® & Renuzit® Snuggle® Linen Escape beer is perfectly made to fill your nose with the inviting scents of clean laundry and fresh floral notes.`],
    [`Relaxing Lavender`, `Gone are the days you need to go to the spa to soothe your soul and feel sweet serenity. Transform your beer into a spa-like getaway by filling every piece of clothing with the relaxing aroma of lavender with BECK’S® & Renuzit® Snuggle® Relaxing Lavender.`],
    [`Enchanting Tropical`, `Delight in bright tropical aromas all year round. Be swept away by the invigorating scents of enchanting tropics, making every refreshing sip smell like a vacation with BECK’S® & Renuzit® Snuggle® Enchanting Tropical. We know you’ll enjoy the vibrant scent experience!`]
]

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

// initialize awards to show the first award
function initAward() {
    mobileAwardPic.src = `images/award0.svg`
    awardName.textContent = `${awardWriteup[0][0]}`;
    awardInfo.textContent = `${awardWriteup[0][1]}`;
    }

// advance text from awardWriteup
function nextAwardSlide() {
    for (let i = 0; i < awardWriteup.length; i++) {
    mobileAwardPic.src = `images/award${[i]}.svg`;
    awardName.textContent = `${awardWriteup[i][0]}`;
    awardInfo.textContent = `${awardWriteup[i][1]}`;
    }
}

// revert text and image
function prevAwardSlide() {
    for (let i = 0; i < awardWriteup.length; i--) {
        mobileAwardPic.src = `images/award${[-i]}.svg`;
        awardName.textContent = `${awardWriteup[i][0]}`;
        awardInfo.textContent = `${awardWriteup[i][1]}`;
    }
}
// choose award from dots below
function chooseAward() {
    awardName.textContent = `${awardWriteup[this.data.offset][0]}`
}

// select aroma from each button
function chooseAroma() {
    aromaType.textContent = `${aromaChoice[this.dataset.aroma][0]}`;
    aromaWriteup.textContent = `${aromaChoice[this.dataset.aroma][1]}`;
    beerBottle.src = `images/bottle${this.dataset.aroma}.png`;
}


// event handelers 
window.addEventListener('load', initAward);
window.addEventListener('scroll', scrollClose);
burgerButton.addEventListener('click', burgerMenuExpand);
toTopButton.addEventListener('click', scrollToTop);
nextAward.addEventListener('click', nextAwardSlide);
prevAward.addEventListener('click', prevAwardSlide);
activeDot.forEach(dot => dot.addEventListener('click', chooseAward));
aromaButton.forEach(button => button.addEventListener('click', chooseAroma));
})();


(() => {
let prevAward = document.querySelector('.prev'),
nextAward = document.querySelector('.next'),
awardName = document.querySelector('.awardName'),
awardInfo = document.querySelector('.awardInfo'),
activeDot = document.querySelectorAll('.dot'),
mobileAwardPic = document.querySelector('#mobileAwardPic'),
awardCount = 0;

const awardWriteup = [
    [`Outstanding Olefactory Award`, `Awarded in Banff, Alberta, the Outstanding Olfactory Award is awarded to products that excel at "making the world smell better, one product at a time". It is an honour to be presented with this award as we take pride in creating a product that will provide fresh scents in the most exiting way. We share this award with our sister company, Renuzit® Brand Snuggle®, who have won many times in the past. Let it serve as our commitment to providing only the freshest scents through our beer!`],
    [`Food Innovation Award`, `The Food Innovation Award is awarded to products that take food creation and consumption to the next level. Only the most innovative food presentation and production processes are given this award, so we take pride in receiving this award in Toronto, Ontario in 2020. We stand by our new product and the guarantee that it will keep your clothes smelling fresh for as long you you're enjoying it! Snuggle Beer is as inovative as it is delicious!`],
    [`Brewery Of The Month Award`, `The prestigious Brewery Of The Year Award is given to breweries of the highest quality. With such competitors as Labatts, Coors, Molson, and the like, we were ecstatic to receive this award presented in Montreal, Quebec. While it's set the bar for our quality, it also motivates us to continue providing beer of the utmost quality, held to the highest standards. This award has put us on the world stage, and we intend on continues to provide those standards to the beer drinkers of the world!`]
];

// initialize awards to show the first award
function initAward() {
    mobileAwardPic.src = `images/award0.svg`
    awardName.textContent = `${awardWriteup[0][0]}`;
    awardInfo.textContent = `${awardWriteup[0][1]}`;
}

// advance text from awardWriteup
function nextAwardSlide() {  
    awardCount++;
    if (awardCount >= awardWriteup.length) {
        awardCount = 0;
    }
    mobileAwardPic.src = `images/award${[awardCount]}.svg`;
    awardName.textContent = `${awardWriteup[awardCount][0]}`;
    awardInfo.textContent = `${awardWriteup[awardCount][1]}`;
    activeDot.forEach(dot => dot.classList.remove('activeDot'));
    activeDot[awardCount].classList.add('activeDot');
    }

// revert text and image
function prevAwardSlide() {
    awardCount--;
    if (awardCount < 0) {
        awardCount = awardWriteup.length - 1;
    }
        mobileAwardPic.src = `images/award${[awardCount]}.svg`;
        awardName.textContent = `${awardWriteup[awardCount][0]}`;
        awardInfo.textContent = `${awardWriteup[awardCount][1]}`;
        activeDot.forEach(dot => dot.classList.remove('activeDot'));
        activeDot[awardCount].classList.add('activeDot');
}
// choose award from dots below
function chooseAward() {
    activeDot.forEach(dot => dot.classList.remove('activeDot'));
    mobileAwardPic.src = `images/award${[this.dataset.offset]}.svg`;
    awardName.textContent = `${awardWriteup[this.dataset.offset][0]}`;
    awardInfo.textContent = `${awardWriteup[this.dataset.offset][1]}`;
    this.classList.add('activeDot');
    awardCount = this.dataset.offset;
}

// event handlers
window.addEventListener('load', initAward);
nextAward.addEventListener('click', nextAwardSlide);
prevAward.addEventListener('click', prevAwardSlide);
activeDot.forEach(dot => dot.addEventListener('click', chooseAward));

})();
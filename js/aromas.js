(() => {
let aromaType = document.querySelector('#aromaType'),
aromaWriteup = document.querySelector('.aromaWriteup'),
beerBottle = document.querySelector('#beerBottle'),
aromaButton = document.querySelectorAll('.aromaButton'),
aromaBG = document.querySelector('#aroma1');

const aromaChoice = [
    [`SuperFresh Original`, `Dash away stink and welcome in snuggly freshness with scents of clean laundry and bright floral notes. Make your beer make you SuperFresh, especially in smaller spaces like lounges and pubs, with BECK’S® & Renuzit® Snuggle® SuperFresh Original.`],
    [`Linen Escape`, `Get the perks of laundry day without having to do any laundry. The BECK’S® & Renuzit® Snuggle® Linen Escape beer is perfectly made to fill your nose with the inviting scents of clean laundry and fresh floral notes.`],
    [`Relaxing Lavender`, `Gone are the days you need to go to the spa to soothe your soul and feel sweet serenity. Transform your beer into a spa-like getaway by filling every piece of clothing with the relaxing aroma of lavender with BECK’S® & Renuzit® Snuggle® Relaxing Lavender.`],
    [`Enchanting Tropical`, `Delight in bright tropical aromas all year round. Be swept away by the invigorating scents of enchanting tropics, making every refreshing sip smell like a vacation with BECK’S® & Renuzit® Snuggle® Enchanting Tropical. We know you’ll enjoy the vibrant scent experience!`]
];

// select aroma from each button
function chooseAroma() {
    aromaType.textContent = `${aromaChoice[this.dataset.aroma][0]}`;
    aromaWriteup.textContent = `${aromaChoice[this.dataset.aroma][1]}`;
    beerBottle.src = `images/bottle${this.dataset.aroma}.png`;
    aromaBG.style.backgroundImage = `url(../images/aroma${this.dataset.aroma}.jpg)`;
}

// event handlers
aromaButton.forEach(button => button.addEventListener('click', chooseAroma));

})();
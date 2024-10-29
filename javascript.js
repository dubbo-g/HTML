const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let currentIndex = 0;


const images = [
    'url(finitoPORSCHE1.jpg)',
    'url(finitoPORSCHE5.jpg)',
    'url(finitoPORSCHE3.jpg)',
    'url(finitoPORSCHE4.jpg)',
    'url(finitoPORSCHE2.jpg)'
];


slides.forEach((slide, index) => {
    slide.style.backgroundImage = images[index];
});

function updateBackground() {
    const backgroundImage = images[currentIndex];
    slider.style.setProperty('--current-bg', backgroundImage);
}

updateBackground();

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
}, 2500);

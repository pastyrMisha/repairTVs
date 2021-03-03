// === brands ===



const sliderLine = document.querySelector('.section-brands-content__slider-line');
const sliderLineB = document.querySelector('.section-footercall-content__slider-line');
let offset = 0;
let counter = 0;

document.querySelector('.section-brands-content__button-next').addEventListener('click', function () {
    offset += 236;
    if (offset > 2596) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.section-brands-content__button-prev').addEventListener('click', function () {
    offset -= 236;
    if (offset < 0) {
        offset = 2596;
    }
    sliderLine.style.left = -offset + 'px';
});

// === / brands ===

// === footercall ===

document.querySelector('.section-footercall-content__button-next').addEventListener('click', function () {
    counter += 180;
    if (counter > 180) {
        counter = 0;
    }
    sliderLineB.style.left = -counter + 'px';
});

document.querySelector('.section-footercall-content__button-prev').addEventListener('click', function () {
    counter -= 180;
    if (counter < 0) {
        counter = 180;
    }
    sliderLineB.style.left = -counter + 'px';
});

// === / footercall ===


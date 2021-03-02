// === brands ===


let offset = 0;
const sliderLine = document.querySelector('.section-brands-content__slider-line');

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
        offset = 1180;
    }
    sliderLine.style.left = -offset + 'px';
});

// === / brands ===


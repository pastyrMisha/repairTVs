let offset = 0;
const sliderLine = document.querySelector('.section-brands-content__slider-line');

document.querySelector('.section-brands-content__button-prev').addEventListener('click', function () {
    offset += 236;
    sliderLine.style.left = offset + 'px';
});
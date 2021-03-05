// === brands ===



// const sliderLine = document.querySelector('.section-brands-content__slider-line');
// const sliderLineB = document.querySelector('.section-footercall-content__slider-line');
// let offset = 0;
// let counter = 0;

// document.querySelector('.section-brands-content__button-next').addEventListener('click', function () {
//     offset += 236;
//     if (offset > 2596) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.section-brands-content__button-prev').addEventListener('click', function () {
//     offset -= 236;
//     if (offset < 0) {
//         offset = 2596;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

const images = document.querySelectorAll('.section-brands-content__slider-line img');
const sliderLine = document.querySelector('.section-brands-content__slider-line');
let count = 0;
let width = document.querySelector('.section-brands-content__slider').offsetWidth;
console.log(width);

function init() {
    // console.log('resize');
    sliderLine.style.width = width*images.length + 'px';
    
    images.forEach(item => {
        if (width > 1250) {
        item.style.width = (width / 5) + 'px';
        } else if (width > 1000) {
            item.style.width = (width / 4) + 'px';
        } else if (width > 760) {
            item.style.width = (width / 3) + 'px';
        } else if (width > 500) {
            item.style.width = (width / 3) + 'px';
        } else {
            item.style.width = width + 'px';
        };
        item.style.height = 'auto';
    });  
}
window.addEventListener('resize', init);
init();

// document.querySelector('.section-brands-content__button-next').addEventListener('click', function () {
//    count++;
//    sliderLine.style.width = width*images.length + 'px';
// //    width = document.querySelector('.section-brands-content__slider').offsetWidth;
// //    sliderLine.style.width = width*images.length + 'px';
// //    if (width > 1250 && count >= 3) {
// //     count = 0;
// //     } else if (width < 1000 && count >= 3) {
// //         count = 0;
// //     } else if (width < 760 && count >= 4) {
// //         count = 0;
// //     } else if (width < 500 && count >= 4) {
// //         count = 0;
// //     } else if (width < 500 && count >= 16) {
// //         count = 0;
// //     };
//     // console.log(width);
//    rollSlider();
//    console.log(images.length);
//     });

// function rollSlider() {
//     sliderLine.style.transform = 'translate(-'+count*width+'px)';
// }


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


// === brands ===

const sliderLine = document.querySelector('.section-brands-content__slider-line');
const sliderLineB = document.querySelector('.section-footercall-content__slider-line');
let offset = 0;
let counter = 0;

document.querySelector('.section-brands-content__button-next').addEventListener('click', function () {
    let width = document.querySelector('.section-brands-content__slider').offsetWidth;
    offset += 236;
    if (width == 1180) {
        if (offset > 2596) {
            offset = 0;
    }
};
    if (width == 944) {
        if (offset > 2832) {
            offset = 0;
    }
};
    if (width == 708) {
        if (offset > 3068) {
            offset = 0;
    }
};
    if (width == 472) {
        if (offset > 3304) {
            offset = 0;
    }
};
    if (width == 236) {
        if (offset > 3540) {
            offset = 0;
    }
};
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.section-brands-content__button-prev').addEventListener('click', function () {
    let width = document.querySelector('.section-brands-content__slider').offsetWidth;
    offset -= 236;
    if (width == 1180) {
        if (offset < 0) {
            offset = 2596;
    }
};
    if (width == 944) {
        if (offset < 0) {
            offset = 2832;
    }
};
    if (width == 708) {
        if (offset < 0) {
            offset = 3068;
    }
};
    if (width == 472) {
        if (offset < 0) {
            offset = 3304;
    }
};
    if (width == 236) {
        if (offset < 0) {
            offset = 3540;
    }
};
    sliderLine.style.left = -offset + 'px';
});

// === / brands ===

// === footercall ===

document.querySelector('.section-footercall-content__button-next').addEventListener('click', function () {
    let width = document.querySelector('.section-footercall-content__slider').offsetWidth;
    counter += 180;

    if (width == 720) {
        if (counter > 180) {
            counter = 0;
    }
};
    if (width == 540) {
        if (counter > 360) {
            counter = 0;
    }
};
    if (width == 360) {
        if (counter > 540) {
            counter = 0;
    }
};
    if (width == 180) {
        if (counter > 720) {
            counter = 0;
    }
};
    sliderLineB.style.left = -counter + 'px';
});

document.querySelector('.section-footercall-content__button-prev').addEventListener('click', function () {
    let width = document.querySelector('.section-footercall-content__slider').offsetWidth;
    counter -= 180;
    console.log(width);

    if (width == 720) {
        if (counter < 0) {
            counter = 180;
    }
};
    if (width == 540) {
        if (counter < 0) {
            counter = 360;
    }
};
    if (width == 360) {
        if (counter < 0) {
            counter = 540;
    }
};
    if (width == 180) {
        if (counter < 0) {
            counter = 720;
    }
};
    sliderLineB.style.left = -counter + 'px';
});

// === / footercall ===



"use strict"

const accordOne = document.querySelector('.section-instructions-content__list-one');
const ulOne = document.getElementById('ulOne');
const accordTwo = document.querySelector('.section-instructions-content__list-two');
const ulTwo = document.getElementById('ulTwo');
const accordThree = document.querySelector('.section-instructions-content__list-three');
const ulThree = document.getElementById('ulThree');
let counter = 0;


accordOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    counter++;

    if (counter%2 == 0) {
    ulOne.classList.remove("accShow");

    } else {
        fadeIn(ulOne, 600);
        ulOne.classList.add("accShow");
    }
});

accordTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    counter++;

    if (counter%2 == 0) {
    ulTwo.classList.remove("accShow");

    } else {
        fadeIn(ulTwo, 600);
        ulTwo.classList.add("accShow");
    }
});

accordThree.addEventListener('click', function (evt) {
    evt.preventDefault();
    counter++;

    if (counter%2 == 0) {
    ulThree.classList.remove("accShow");

    } else {
        ulThree.classList.add("accShow");
        fadeIn(ulThree, 600);

    }
});




function fadeIn(el, time) {
    el.style.opacity = 0;
  
    let last = +new Date();

    let tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  };

// function fadeOut(el, time) {
//     el.style.opacity = 1;
  
//     let last = +new Date();

//     let tick = function() {
//       el.style.opacity = +el.style.opacity - (new Date() - last) / time;
//       last = +new Date();
  
//       if (+el.style.opacity > 0) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//       }
//     };
  
//     tick();
//   };


const accordOne = document.getElementsByClassName("accordOne");
const accordTwo = document.getElementsByClassName("accordTwo");
const accordThree = document.getElementsByClassName("accordThree");
let accOne = document.querySelector(".accordOne");
let accTwo = document.querySelector(".accordTwo");
let accThree = document.querySelector(".accordThree");
let panelOne = document.querySelector(".panelOne");
let panelTwo = document.querySelector(".panelTwo");
let panelThree = document.querySelector(".panelThree");

for (i = 0; i < accordOne.length; i++) {

    accordOne[i].addEventListener("click", function() {

    this.classList.toggle("active");

    if (panelOne.style.maxHeight) {
        accTwo.classList.remove("active");
        accThree.classList.remove("active");
        panelTwo.style.maxHeight = null;
        panelThree.style.maxHeight = null;
        panelOne.style.maxHeight = null;
    } else {
        accTwo.classList.remove("active");
        accThree.classList.remove("active");
        panelTwo.style.maxHeight = null;
        panelThree.style.maxHeight = null;
        panelOne.style.maxHeight = panelOne.scrollHeight + "px";
    } 
  });
};

for (i = 0; i < accordTwo.length; i++) {

    accordTwo[i].addEventListener("click", function() {

    this.classList.toggle("active");

    if (panelTwo.style.maxHeight) {
        accOne.classList.remove("active");
        accThree.classList.remove("active");
        panelOne.style.maxHeight = null;
        panelThree.style.maxHeight = null;
        panelTwo.style.maxHeight = null;
    } else {
        accOne.classList.remove("active");
        accThree.classList.remove("active");
        panelOne.style.maxHeight = null;
        panelThree.style.maxHeight = null;
        panelTwo.style.maxHeight = panelTwo.scrollHeight + "px";
    } 
  });
};

for (i = 0; i < accordThree.length; i++) {

    accordThree[i].addEventListener("click", function() {

    this.classList.toggle("active");

    if (panelThree.style.maxHeight) {
        accOne.classList.remove("active");
        accTwo.classList.remove("active");
        panelOne.style.maxHeight = null;
        panelTwo.style.maxHeight = null;
        panelThree.style.maxHeight = null;
    } else {
        accOne.classList.remove("active");
        accTwo.classList.remove("active");
        panelOne.style.maxHeight = null;
        panelTwo.style.maxHeight = null;
        panelThree.style.maxHeight = panelThree.scrollHeight + "px";
    } 
  });
};


// const accordOne = document.querySelector('.section-instructions-content__list-one');
// const ulOne = document.getElementById('ulOne');
// const accordTwo = document.querySelector('.section-instructions-content__list-two');
// const ulTwo = document.getElementById('ulTwo');
// const accordThree = document.querySelector('.section-instructions-content__list-three');
// const ulThree = document.getElementById('ulThree');
// let counter = 0;


// accordOne.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     counter++;

//     if (counter%2 == 0) {
//     ulOne.classList.remove("accShow");

//     } else {
//         fadeIn(ulOne, 600);
//         ulOne.classList.add("accShow");
//     }
// });

// accordTwo.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     counter++;

//     if (counter%2 == 0) {
//     ulTwo.classList.remove("accShow");

//     } else {
//         fadeIn(ulTwo, 600);
//         ulTwo.classList.add("accShow");
//     }
// });

// accordThree.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     counter++;

//     if (counter%2 == 0) {
//     ulThree.classList.remove("accShow");

//     } else {
//         ulThree.classList.add("accShow");
//         fadeIn(ulThree, 600);

//     }
// });




// function fadeIn(el, time) {
//     el.style.opacity = 0;
  
//     let last = +new Date();

//     let tick = function() {
//       el.style.opacity = +el.style.opacity + (new Date() - last) / time;
//       last = +new Date();
  
//       if (+el.style.opacity < 1) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//       }
//     };
  
//     tick();
//   };

// // function fadeOut(el, time) {
// //     el.style.opacity = 1;
  
// //     let last = +new Date();

// //     let tick = function() {
// //       el.style.opacity = +el.style.opacity - (new Date() - last) / time;
// //       last = +new Date();
  
// //       if (+el.style.opacity > 0) {
// //         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
// //       }
// //     };
  
// //     tick();
// //   };



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

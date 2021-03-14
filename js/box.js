
window.addEventListener("DOMContentLoaded", () => { 
    const data = [
        {
            title: "Не включается",        
            price: "750 руб."
        },
        {
            title:"Не показывает",
            price: "650 руб."
        },
        {
            title:"Нет звука",
            price: "790 руб."
        },
        {
            title:"Нет сигнала",
            price: "650 руб."
        },
        {
            title:"Не видит устройства",
            price: "690 руб."
        },
        {
            title:"Не переключает каналы",
            price: "750 руб."
        },
        {
            title:"Гаснет со временем",
            price: "1000 руб."
        },
        {
            title:"Ремонт/замена блока питания",
            price: "950 руб."
        },
        {
            title:"Ремонт/замена подсветки",
            price: "900 руб."
        },
        {
            title:"Замена экрана",
            price: "1900 руб."
        },
        {
            title:"Замена материнской платы",
            price: "1100 руб."
        },
        {
            title:"Другие проблемы",
            price: "по звонку"
        },
    ]

    const buttons = document.querySelectorAll(".section-whywe-wrapper__box-icon");

    const createOverlay = () => {
        const overlay = document.createElement("div");
        overlay.id = "overlay";
        overlay.classList.add("overlay");
        overlay.addEventListener("click", () => {
            overlay.remove();
            const floated = document.querySelector('.section-whywe-content__floated');
            floated.classList.remove("__show");
        })
        return overlay;
    }

    const closePopup = () => {
        const closePopup = document.createElement("div");
        const i = document.createElement("i");
        closePopup.id = "closepopup";
        closePopup.classList.add("modal__popup");
        closePopup.appendChild(i);
        return closePopup;
    }

    const createBox = (title, price) => {
        const div = document.querySelector(".section-whywe-content__floated");       
        div.classList.add("__show");
        const spanTitle = document.querySelector(".section-whywe-content__floated-subtitle__title");
        const spanPrice = document.querySelector(".section-whywe-content__floated-detail__box-subtitle");
        spanPrice.textContent = price;
        spanTitle.textContent = title;
        
        const closed = closePopup();
        document.body.appendChild(createOverlay());
        div.appendChild(closed);
        closed.addEventListener("click", function (evt) {
            evt.preventDefault();
            const overlay = document.querySelector(".overlay");
            overlay.remove();
            const floated = document.querySelector('.section-whywe-content__floated');
            floated.classList.remove("__show");
        });
        return div;
    }

    const removeDiv = () => {
        buttons.forEach(item => {
            const div = document.querySelector(".section-whywe-content__floated");
            if(div) {
                div.classList.remove("__show");
            }
        })
    }

    buttons.forEach((elem, idx) => {
        elem.addEventListener("click", () => {
            removeDiv();
            createBox(data[idx].title, data[idx].price);
        })
    })
})
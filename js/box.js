
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
        return overlay;
    }


    const closePopup = () => {
        const closePopup = document.createElement("div");
        closePopup.id = "closepopup";
        return closePopup;
    }


    const createBox = (title, price) => {
        const div = document.createElement("div");       
        div.classList.add("floated");
        const spanTitle = document.createElement("span");
        const spanPrice = document.createElement("span");
        spanPrice.textContent = price;
        spanTitle.textContent = title;
        div.appendChild(spanTitle);
        div.appendChild(spanPrice);
        document.body.appendChild(createOverlay());
        div.appendChild(closePopup());
        return div;
    }

   
    
    const removeDiv = () => {
        buttons.forEach(item => {
            const div = document.querySelector(".floated");
            if(div) {
                div.remove();
            }
        })
    }

    buttons.forEach((elem, idx) => {
        elem.addEventListener("click", () => {
            removeDiv();
            document.body.appendChild(createBox(data[idx].title, data[idx].price));
        })
    })
})
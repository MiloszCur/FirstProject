
let changeButton = document.querySelector(".mode");
let body = document.querySelector("body");
let header = document.querySelector(".header__Title");
let table = document.querySelector(".table__body");
let changeBtnText = document.querySelector(".mode__changeMode");

const subHeader = document.querySelectorAll(".mainText__header");
const menuPages = document.querySelectorAll(".navigation__link");

changeButton.addEventListener("click", () => {

    body.classList.toggle("dark")

    if (body.classList.contains("dark")) {

        for (let i = 0; i < subHeader.length; i++) {
            subHeader[i].style.color = "#2EB847";
        }
        for (let i = 0; i < menuPages.length; i++) {
            menuPages[i].style.color = "#2EB847";
        }

        body.style.background = "rgb(70, 67, 67)";
        body.style.color = "#EBE9E8";
        header.style.color = "#2EB847";
        changeBtnText.innerText = "Light";
    } else {

        for (let i = 0; i < subHeader.length; i++) {
            subHeader[i].style.color = "black";
        }
        for (let i = 0; i < menuPages.length; i++) {
            menuPages[i].style.color = "black";
        }

        body.style.background = "white";
        header.style.color = "#db143c";
        body.style.color = "black";
        changeBtnText.innerText = "Dark";
    }

});
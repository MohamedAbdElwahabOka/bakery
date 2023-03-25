window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-bar");

    if (window.scrollY > 0) {
        navbar.classList.add("nav-bar-scrolled");

    } else {
        navbar.classList.remove("nav-bar-scrolled");

    }
});

var logo = document.getElementById("logo");

window.addEventListener("scroll", () => {

    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    if (scrollPos > 0) {

        logo.src = "img/bakery-color.png";
    } else {

        logo.src = "img/bakery-light-1.png";
    }
});

var a1 = document.querySelector(".a1");
var a2 = document.querySelector(".a2");
var a3 = document.querySelector(".a3");
var a4 = document.querySelector(".a4");
var a5 = document.querySelector(".a5");
var a6 = document.querySelector(".a6");


window.addEventListener("scroll", () => {

    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    if (scrollPos > 0) {
        // nav.style.color = "#303030";

        a1.classList.add("text-a-scrolled");
        a2.classList.add("text-a-scrolled");
        a3.classList.add("text-a-scrolled");
        a4.classList.add("text-a-scrolled");
        a5.classList.add("text-a-scrolled");
        a6.classList.add("text-a-scrolled");

    } else {

        a1.classList.remove("text-a-scrolled");
        a2.classList.remove("text-a-scrolled");
        a3.classList.remove("text-a-scrolled");
        a4.classList.remove("text-a-scrolled");
        a5.classList.remove("text-a-scrolled");
        a6.classList.remove("text-a-scrolled");
    }
});


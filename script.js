window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
        navbar.classList.add("nav-bar-scrolled");
    } else {
        navbar.classList.remove("nav-bar-scrolled");
    }
});

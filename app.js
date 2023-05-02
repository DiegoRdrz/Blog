function toggleMenu() {
    var menu = document.querySelector(".nav-right");
    var hamburger = document.querySelector(".hamburger-menu");
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}
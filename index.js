const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu")
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCartIcon=document.querySelector(".navbar-shopping-cart");
const aside=document.querySelector(".product-detail");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCartIcon.addEventListener("click",toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
}
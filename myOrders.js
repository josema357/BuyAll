const menuCartIcon=document.querySelector(".navbar-shopping-cart");
const menuEmail=document.querySelector(".navbar-email");
const menuHamIcon=document.querySelector(".menu");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu");
const shoppingCartContainer=document.querySelector("#shoppingCartContainer");
const ordersList=document.querySelectorAll(".my-order-content");
const flechitaShoppCart=document.querySelector(".title-container img");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCartIcon.addEventListener("click",toggleCarritoAside);
for(let i=0;i<ordersList.length;i++){
    ordersList[i].addEventListener("click",linkTo);
}
flechitaShoppCart.addEventListener("click",toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
}

function linkTo(){
    location.href="./myorder.html"
}
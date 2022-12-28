const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu")
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCartIcon=document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer=document.querySelector("#shoppingCartContainer");
const cardsContainer=document.querySelector(".cards-container");
const productDetail=document.querySelector("#productDetail");
const productDetailClose=document.querySelector(".product-detail-close")
const flechitaShoppCart=document.querySelector(".title-container img");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCartIcon.addEventListener("click",toggleCarritoAside);
productDetailClose.addEventListener("click",closeProductDetail);
flechitaShoppCart.addEventListener("click",toggleCarritoAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetail(){
    productDetail.classList.remove("inactive")
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

function closeProductDetail(){
    productDetail.classList.add("inactive")
}

const productList=[
    {
        name: "Laptop",
        price: 2000.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Monitor",
        price: 1000.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Teclado",
        price: 500.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Mouse",
        price: 200.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Mouse",
        price: 200.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Mouse",
        price: 200.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Mouse",
        price: 200.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Mouse",
        price: 200.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Monitor",
        price: 1000.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Monitor",
        price: 1000.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Monitor",
        price: 1000.00,
        img: "./images/laptop.jpg"
    },
    {
        name: "Monitor",
        price: 1000.00,
        img: "./images/laptop.jpg"
    }
];


function renderProducts(arr){
    for (product of arr) {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const img=document.createElement("img");
        img.setAttribute("src",product.img);
        img.addEventListener("click",openProductDetail);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+ product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)


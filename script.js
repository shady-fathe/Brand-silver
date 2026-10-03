let Header = document.querySelector("header");
let cart = document.querySelector(".Shop-cart");
let btncart = document.querySelector(".btn-cart");
let btnclosecart = document.querySelector(".btn-close-cart");
// let productsImges = [
//     "Products/T-shirts/product-0-0.png",
//     "Products/T-shirts/product-1-0.png",
//     "Products/T-shirts/product-2-0.png",
//     "Products/T-shirts/product-3-0.png",
//     "Products/T-shirts/product-4-0.png",
//     "Products/T-shirts/product-5-0.png",
//     "Products/T-shirts/product-6-0.png",
//     "Products/T-shirts/product-0-0.png",
// ];
// // let productsImges = [
// //     "Products/T-shirts/product-0-0.png",
// // [
// //     "Products/T-shirts/product-1-0.png",
// //     "Products/T-shirts/product-1-1.png",
// //     "Products/T-shirts/product-1-2.png",
// //     "Products/T-shirts/product-1-3.png",
// // ],
// //     "Products/T-shirts/product-2-0.png",
// // [
// //     "Products/T-shirts/product-3-0.png",
// //     "Products/T-shirts/product-3-1.png",
// // ],
// //     "Products/T-shirts/product-4-0.png",
// // [
// //     "Products/T-shirts/product-5-0.png",
// //     "Products/T-shirts/product-5-1.png",
// // ],
// //     "Products/T-shirts/product-6-0.png",
// // ];

// let count = 0;
// window.onload = function(){
// let productImg = document.querySelectorAll('.product-img')
// productImg.forEach((e)=>{
//         e.style.backgroundImage = `url(${productsImges[count]})`
//         count++
// })

// }



// funtion to change the opacty for header  
// document.onscroll =  function(){
// if(scrollY >= 10 ){
//     Header.style.opacity = 1
//     Header.style.pointerEvents = "auto"
// }else{    
//     Header.style.opacity = 0
//     Header.style.pointerEvents = "none"
// }
// }


// cart functions open and close 

btncart.onclick = ()=>{
    cart.style.opacity = 1
    cart.style.pointerEvents = "auto"

    btnclosecart.onclick = ()=>{
        cart.style.opacity = 0
        cart.style.pointerEvents = "none"
}


}






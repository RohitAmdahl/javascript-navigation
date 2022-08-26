const burger = document.querySelector(".burger")
const nav = document.querySelector(".links")

   const openMenu = function() {
  burger.addEventListener("click", function () {
   
     nav.classList.toggle("nav-active")

     burger.classList.toggle("close");

   });
  
 }

 openMenu();

// const apiCallingHeading = document.querySelector("h1")
// console.log(apiCallingHeading);





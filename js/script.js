

  const openMenu = function() {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".links")

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active")
  });

}

openMenu();

let navMenu = document.querySelector(".main-menu");
let navButton = document.querySelector(".main-menu__button-icon");

navMenu.classList.remove("main-menu--nojs");

navButton.addEventListener('click', function () {
  if (navMenu.classList.contains("main-menu--closed")) {
    navMenu.classList.remove("main-menu--closed");
  } else {
    navMenu.classList.add("main-menu--closed");
  }
});

let burgerIcon = document.querySelector(".navbar-burger");
let menuItems = document.querySelector(".navbar-list-container");
let menuItemsContainer = document.querySelector(".navbar-list-mobile-container");
let closeIcon = document.querySelector(".navbar-burger-close");

burgerIcon.addEventListener("click", function (event) {
  menuItems.classList.toggle("active");
  menuItemsContainer.classList.toggle("active");
  burgerIcon.classList.toggle("inactive");
  closeIcon.classList.toggle("active");
});

closeIcon.addEventListener("click", function (event) {
  menuItems.classList.toggle("active");
  menuItemsContainer.classList.toggle("active");
  burgerIcon.classList.toggle("inactive");
  closeIcon.classList.toggle("active");
  });


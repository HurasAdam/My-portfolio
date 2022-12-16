const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");

function MenuTrigger() {
  mobileMenu.classList.toggle("active");
  burgerButton.classList.toggle("active");
}

burgerButton.addEventListener("click", MenuTrigger);

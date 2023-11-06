const menuIconOpen = document.querySelector(".menu-icon-open");
const menuIconClose = document.querySelector(".menu-icon-close");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

menuIconOpen.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  //   body.style.background = "rgba(0, 0, 0, 0.5)";
});
menuIconClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

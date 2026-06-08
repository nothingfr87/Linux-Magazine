const menu = document.querySelector(".ham-menu");
const list = document.querySelector(".header .links ul");

menu.addEventListener("click", () => {
  list.classList.toggle("open");
});

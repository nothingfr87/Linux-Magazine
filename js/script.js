const body = document.body;
// Hamburger Menu
const menu = document.querySelector(".links");
const list = document.querySelector(".header .links ul");

menu.addEventListener("click", () => {
  list.classList.toggle("open");
});

// Light/Dark Mode Switcher
const button = document.querySelector(".switch-mode");

button.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    button.innerHTML = 'الوضع المظلم  <i class="fa-solid fa-moon"></i>';
  } else {
    button.innerHTML = 'الوضع الفاتح  <i class="fa-solid fa-sun"></i>';
  }
});

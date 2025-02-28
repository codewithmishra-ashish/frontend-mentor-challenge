const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  menu.parentElement.classList.toggle("open");
  document.body.classList.toggle("nav-open");
});

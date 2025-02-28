function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overflow = document.getElementById("overflow");
  sidebar.classList.toggle("active");
  overflow.classList.toggle("active");
}

function toggleDropdown(element) {
  element.classList.toggle("active");
}

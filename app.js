function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overflow = document.getElementById("overflow");
  sidebar.classList.toggle("active");
  overflow.classList.toggle("active");
}

function toggleFeaturesDropdown(element) {
  const dropdown = element.querySelector(".dropdown");
  const upArrow = element.querySelector(".up-arrow");
  const downArrow = element.querySelector(".down-arrow");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    upArrow.style.display = "none";
    downArrow.style.display = "inline";
  } else {
    dropdown.style.display = "block";
    upArrow.style.display = "inline";
    downArrow.style.display = "none";
  }
}

function toggleCompanyDropdown(element) {
  const dropdown = element.querySelector(".dropdown");
  const upArrow = element.querySelector(".up-arrow");
  const downArrow = element.querySelector(".down-arrow");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    upArrow.style.display = "none";
    downArrow.style.display = "inline";
  } else {
    dropdown.style.display = "block";
    upArrow.style.display = "inline";
    downArrow.style.display = "none";
  }
}

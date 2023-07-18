// Hamburger Menu Script
const hamburger = document.querySelector('#hamburger');
const sideMenu = document.querySelector('#side-menu');
const closeButton = document.querySelector('#close-button');
const overlay = document.querySelector('#overlay');
hamburger.addEventListener('click', function() {
  sideMenu.classList.toggle('visible');
  overlay.classList.toggle('visible');
});

document.addEventListener("click", function(event) {
  if (event.target === closeButton || event.target === overlay) {
    sideMenu.classList.remove("visible");
    overlay.classList.remove("visible");
  }
});


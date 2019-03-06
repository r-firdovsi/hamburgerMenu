let hamburgerMenu = document.querySelector('.hamburger-menu');
let navWrapper    = document.querySelector('.nav-wrapper');

hamburgerMenu.addEventListener("click", () => {
	navWrapper.classList.toggle('change');
});
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.hamburger-links');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

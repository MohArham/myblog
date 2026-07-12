const closeButton = document.querySelector('.close-button');
const openButton = document.querySelector('.open-button');
const nav = document.querySelector('.nav');

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 
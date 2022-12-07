const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const social = document.querySelector('.social');

menu.addEventListener('click', () => {
    nav.classList.toggle('toggle-nav');
    social.classList.toggle('active');
});
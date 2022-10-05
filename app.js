const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const workSection = document.querySelector('.my-work');

menu.addEventListener('click', () => {
    nav.classList.toggle('toggle-nav');
});

window.addEventListener('scroll', bgTransition)

function bgTransition() {
    const sectionTop = workSection.getBoundingClientRect().top;
    if(sectionTop < 24) {
        workSection.classList.add('transition-bg')
    }else {
        workSection.classList.remove('transition-bg')

    }
}


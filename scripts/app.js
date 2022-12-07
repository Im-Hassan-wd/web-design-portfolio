const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const social = document.querySelector('.social');
const workSection = document.querySelector('.my-work');
const projects = document.querySelectorAll('.work');
const previewPopup = document.querySelector(".preview-container");
const previewWrap = document.querySelector(".preview-wrap");
const closePopup =  document.querySelector('.close-popup button')

menu.addEventListener('click', () => {
    nav.classList.toggle('toggle-nav');
    social.classList.toggle('active');
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

const previewProject = () => {
   projects.forEach((project, i) => {
    project.addEventListener('click', function () {
        const dataCode = this.children[0].getAttribute('data-code');
        const dataDemo = this.children[0].getAttribute('data-demo');
        previewWrap.children[1].children[0].href = dataCode;
        previewWrap.children[1].children[1].href = dataDemo;
        console.log(dataCode, dataDemo)

        previewWrap.classList.add('active');
        previewPopup.classList.add('active');
    })
   }) 
}

closePopup.addEventListener('click', () => {
    previewWrap.classList.remove('active');
    previewPopup.classList.remove('active'); 
})

previewProject();

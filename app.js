const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const workSection = document.querySelector('.my-work');
const projects = document.querySelectorAll('.work');
const previewPopup = document.querySelector(".preview-container");
const closePopup =  document.querySelector('.close-popup')

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

const previewProject = () => {
   projects.forEach((project, i) => {
    project.addEventListener('click', function () {
        const popup1 = previewPopup.children[0];
        const popup2 = previewPopup.children[1];
        previewPopup.classList.add("active") ;
        popup1.classList.add("active") ;
        popup2.classList.add("active") ;
    })
   }) 
}

closePopup.addEventListener('click', () => {
    const popup1 = previewPopup.children[0];
    const popup2 = previewPopup.children[1];
    previewPopup.classList.remove("active") ;
    popup1.classList.remove("active") ;
    popup2.classList.remove("active") ;  
})

previewProject();

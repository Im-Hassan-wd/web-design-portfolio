const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const social = document.querySelector('.social');

menu.addEventListener('click', () => {
    nav.classList.toggle('toggle-nav');
    social.classList.toggle('active');
});

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger')
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e) {
        // remove current active clases
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes from content
        this.container.querySelectorAll('.content').forEach(itemt => {
            itemt.classList.remove('active');
        });
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
import './style.css';
import { createHeader, createHtmlCards, createReviewSection } from './home';
import { createMenu } from './menu';
import { createForm } from './reserve';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const reserveTable = document.getElementById('table');

const container = document.getElementById('container');

home.addEventListener('click', renderPage);
menu.addEventListener('click', renderPage);
reserveTable.addEventListener('click', renderPage)

function renderPage(e) {
    container.innerHTML = '';
    if(e.target.id === 'home') {
        console.log('home clicked');
        renderElements([createHeader, createHtmlCards, createReviewSection]);
    }

    if(e.target.id === 'menu') {
        renderElements([createMenu]);
    }

    if(e.target.id === 'table') {
        renderElements([createForm]);
    }
}

function renderElements(array) {
   // const container = document.getElementById('container');

    for(let i of array) {
        container.appendChild(i());
    }
}

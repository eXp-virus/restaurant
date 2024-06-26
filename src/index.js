import './style.css';
import { createHeader, createChef, createReviewSection } from './home';
import { createForm } from './reserve';
import { createItems } from './menu';

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
        renderElements([createHeader, createChef, createReviewSection]);
    }

    if(e.target.id === 'menu') {
        renderElements([createItems]);
    }

    if(e.target.id === 'table') {
        renderElements([createForm]);
    }
}

function renderElements(array) {
    for(let i of array) {
        container.appendChild(i());
    }
}

renderElements([createHeader, createChef, createReviewSection]);
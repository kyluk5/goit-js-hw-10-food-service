import menuObj from '../json/menu.json';
import menuTemplate from '../templates/menuTemplate.hbs';

const menuUl = document.querySelector('.menu');
const menuLI = menuObj.map(item => menuTemplate(item)).join('');
menuUl.insertAdjacentHTML('beforeend', menuLI);

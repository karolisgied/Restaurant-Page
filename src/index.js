import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import honeyDripEffectImage from './img/honeyDrip.png';
import './reset.css';
import './style.css';

const content = document.getElementById('content');
const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const contactButton = document.querySelector('.contact-btn');

const buttonHoneyEffect = () => {
    const previousImage = document.querySelector('.honeyDripEffect');
    if(previousImage)previousImage.remove();
    const honeyDripEffect = document.createElement('img');
    honeyDripEffect.src = honeyDripEffectImage;
    honeyDripEffect.className = 'honeyDripEffect';
    event.currentTarget.append(honeyDripEffect);
}


homeButton.addEventListener('click', () => {
    buttonHoneyEffect();
    content.textContent = '';
    home();
});

menuButton.addEventListener('click', () => {
    buttonHoneyEffect();
    content.textContent = '';
    menu();
});

contactButton.addEventListener('click', () => {
    buttonHoneyEffect();
    content.textContent = '';
    contact();
});


console.log('Hello');

import { Characters } from '../characters.js';
import { Template } from 'template.js';
const main = () => {
    const cards = () => {
        const elementCardImg = document.querySelector('img');
        elementCardImg.src = 'img/joffrey.jpg';
        //codigo comentado ya que me anula la foto y aun desconozco el motivo
        // const elementCharacterName = document.querySelector('character__name');
        // elementCharacterName.innerHTML = `${Characters[0].name}`;
    };
    const bucle = () => {
        Characters.forEach((element) => Template());
    };
};
document.addEventListener('DOMContentLoaded', main);

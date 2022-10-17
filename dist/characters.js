import { King } from './king.js';
import { Fighter } from './fighter.js';
import { Assessor } from './assessor.js';
import { Squire } from './squire.js';
const characters = [
    new King('Joffrey', 'Baratheon', 13, 1)
];
new Fighter('Daenerys', 'Targaryen', 23, 'Dragons', 8);
new Fighter('Jaime', 'Lannister', 37, 'sword', 6);
new Assessor('Tyrion', 'Lannister', 33);
new Squire('Bronn', 'Aguasnegras', 45, 5);
;
characters[3].assessor = characters[1];
console.log(characters); //importar al ficher html

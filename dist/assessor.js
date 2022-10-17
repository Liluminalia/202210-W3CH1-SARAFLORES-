import { Character } from './character';
export class Assessor extends Character {
    constructor(name, family, age) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto.';
    }
}

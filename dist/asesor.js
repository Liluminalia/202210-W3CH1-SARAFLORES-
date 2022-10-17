import { Character } from './character';
export class assessor extends Character {
    constructor(name, family, age) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto.';
    }
}

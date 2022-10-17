import { Character } from './character';
export class Squire extends Character {
    constructor(name, family, age, toady) {
        super(name, family, age);
        this.toady = toady;
        this.message = 'Soy un loser.';
    }
}

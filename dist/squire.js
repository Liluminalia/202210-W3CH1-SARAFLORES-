import { Character } from './character';
export class Squire extends Character {
    constructor(name, family, age, patheticLevel) {
        super(name, family, age);
        this.patheticLevel = patheticLevel;
        this.message = 'Soy un loser.';
    }
}

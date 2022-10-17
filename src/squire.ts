import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
    patheticLevel: number;
    squiring = Fighter;

    constructor(
        name: string,
        family: string,
        age: number,
        patheticLevel: number
    ) {
        super(name, family, age);
        this.patheticLevel = patheticLevel;
        this.squiring = Fighter;
        this.message = 'Soy un loser.';
    }
}

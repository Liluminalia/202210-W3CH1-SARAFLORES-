import { Character } from './character';
export class Fighter extends Character {
    constructor(name, family, age, weapons, skill) {
        super(name, family, age);
        this.weapons = weapons;
        this.skill = skill;
        this.message = 'Primero pego y luego pregunto.';
    }
}

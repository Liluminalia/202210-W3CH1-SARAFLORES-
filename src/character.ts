import { Assessor } from './assessor.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Squire } from './squire.js';
export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    assessor: Assessor | null;
    squiring: Squire | null;
    static serie = 'Game of Thrones';
    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.assessor = null;
        this.squiring = null;
    }
    communicate() {
        return this.message;
    }
    die() {
        this.lifeStatus = false;
    }
}

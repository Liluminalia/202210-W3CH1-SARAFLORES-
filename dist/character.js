export class Character {
    constructor(name, family, age) {
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
Character.serie = 'Game of Thrones';

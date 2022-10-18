//interdace -> se parece mucho a una clase, son los tipos de valores de cada clase, solo se pueden usar para tipar o para implementar.nunca para instanciar
export class Character {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.assessor = null;
    }
    communicate() {
        return this.message;
    }
    death() {
        this.lifeStatus = false;
    }
}
Character.serie = 'Game of Thrones';
// hardcodear -> poniendo algo de manera literal y no guardandolo con una variable, forzamos a que no se pueda cambiar.
//metodos age, communicate, die
// propiedades -> message
//los objetos son instancias de las clases

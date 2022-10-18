import { Character } from './character';
describe('Given the class Character', () => {
    describe('when we instantiate the class', () => {
        let expectedResult;
        let character;
        beforeEach(() => {
            // ARRANGE
            const name = 'pepe';
            const family = 'pepes';
            const age = 33;
            expectedResult = {
                name,
                family,
                age,
                lifeStatus: true,
                message: '',
            };
            //ACT
            const character = new Character(name, family, age);
        });
        test('then we have an object of this class', () => {
            //ASSERT
            expect(character).toEqual(expectedResult);
        });
        test(`and we run a method death, 
        then the property lifeStatus should be false`, () => {
            character.death();
            expect(character.death).toHaveBeenCalled();
        });
    });
});
// los argumentos son los VALORES que yo le paso a una funcion
// los parametros son las VARIABLES que recogen los argumentos
// para comparar un objeto y un objeto creado se utiliza -----> ToEqual()

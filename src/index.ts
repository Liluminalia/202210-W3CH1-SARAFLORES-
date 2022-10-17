import {}
'use strict';
const main = () => {
      const eCardImg = document.querySelectorAll('img');
        console.log(eCardImg);
    const cards = () => {
      
        (eCardImg as HTMLImageElement).src ='./dist/img/joffrey.jpg';
        const eCharacterName =document.querySelector('.Character__name');
        (eCharacterName as Element).innerHTML=`${}`;
    };
    cards();
         const template = `
<div class="card character__card">
    <img
        src="img/no-one.jpg"
        alt="Nombre y familia del personaje"
        class="character__picture card-img-top"
    />
    <div class="card-body">
        <h2 class="character__name card-title h4">Nombre y familia</h2>
        <div class="character__info">
            <ul class="list-unstyled">
                <li>Edad: ${data.age} años</li>
                <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                </li>
            </ul>
        </div>
        <div class="character__overlay">
            <ul class="list-unstyled">
                <li>Años de reinado: X</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
            </ul>
            <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
            </div>
        </div>
    </div>
    <i class="emoji"></i>
</div>;

    `;
        const eSlot = document.querySelector('slot');
        eSlot.outerHTML = template;
    };
    const eUserForm = document.querySelector('.user-form');
    eUserForm === null || eUserForm === void 0
        ? void 0
        : eUserForm.addEventListener('submit', handleSubmit);
};
console.log('Loaded Index');
document.addEventListener('DOMContentLoaded', main());

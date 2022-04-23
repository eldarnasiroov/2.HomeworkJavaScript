// 5. Напишите функцию, которая будет принимать объект с любым уровнем вложенности 
// и корректно копировать его, возвращая скопированный вариант
function getObjectClone(object) {
    if (typeof object === 'object') {
        let clone = JSON.parse(JSON.stringify(object));
        return clone;
    } else {
        console.log('Entered value is not an object.');
    }
}
let object = {
    name: 'Eldar',
    surname: 'Nasirov',
    object2: {
        name: 'Nasir',
        surname: 'Eldarov',
        object3: {
            name: 'Naldar',
            surname: 'Esirov',
            object4: {
                name: 'Elnas',
                surname: 'Darirov'
            }
        }
    }
};
let clone = getObjectClone(object);
// 2. Написать функцию, которая принимает три параметра. Первый параметр - массив. Второй параметр - строка - 
// “start” или “end”. Третий параметр - значение. Это может быть как одно значение, так и массив значений. 
// В зависимости от второго параметра, функция добавляет третий параметр в массив (если третий параметр - массив, то его нужно  
// раскрыть),который отправлен первым параметров, в конец или в начало и возвращает длину нового массива.
function addElement(array, position, value) {
    if (Array.isArray(array) && position && value) {
        if (position === 'start') {
            if (Array.isArray(value)) {
                let newArray = [...value, ...array];
                return newArray.length;
            } else {
                let newArray = [value, ...array];
                return newArray.length;
            }
        } else if (position === 'end') {
            if (Array.isArray(value)) {
                let newArray = [...array, ...value];
                return newArray.length;
            } else {
                let newArray = [...array, value];
                return newArray.length;
            }
        } else {
            console.log('Error. Entered position does not exist.');
        }
    } else {
        console.log('Oops... Something went wrong.');
    }
}
let array = [4, 5, 6, 1, 8];
let length = addElement(array, 'start', [100, 45, 1, 456, 7]);
console.log(length);
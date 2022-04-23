// 3. Написать функцию, которая принимает два параметра. Первый параметр - массив. Второй параметр - строка - “start” или “end”. 
// В зависимости от второго параметра, функция удаляет один элемент из конца или из начала отправленного массива.
// Возвращает удаленный элемент.
function removeElement(array, position) {
    if (Array.isArray(array) && position) {
        if (position === 'start') {
            let removed = array[0];
            for (i = 1; i < array.length + 1; i++) {
                array[i - 1] = array[i];
            }
            array.length -= 1;
            return removed;
        } else if (position === 'end') {
            let removed = array[array.length - 1];
            array.length -= 1;
            return removed;
        } else {
            console.log('Error. Entered position does not exist.');
        }
    } else {
        console.log("Oops... Something went wrong.");
    }
}
let arr = [500, 10, 20, 30, 40, 50];
console.log(removeElement(arr, 'start'));
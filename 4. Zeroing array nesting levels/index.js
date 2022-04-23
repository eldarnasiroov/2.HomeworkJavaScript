// 4. Напишите функцию, которая принимает массив с любым уровнем вложенных
// массивов и возвращает новый массив, где все элементы на 0 уровне
function zerroingLvls(array) {
    if (Array.isArray(array)) {
        let newArray = array.flat(Infinity);
        return newArray;
    } else {
        console.log('Error. Entered value is not an array.');
    }
}
let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14]]]]]]];
console.log(zerroingLvls(arr));
const employee = [{
    "id": 1,
    "name": "Elliot Laroze",
    "salary": 604,
    "age": 46
}, {
    "id": 2,
    "name": "Tibold Strickland",
    "salary": 575,
    "age": 34
}, {
    "id": 3,
    "name": "Aldon Kenafaque",
    "salary": 816,
    "age": 32
}, {
    "id": 4,
    "name": "Danice O'Sirin",
    "salary": 107,
    "age": 50
}, {
    "id": 5,
    "name": "Axe Lofthouse",
    "salary": 541,
    "age": 51
}, {
    "id": 6,
    "name": "Adelice Emberton",
    "salary": 702,
    "age": 46
}, {
    "id": 7,
    "name": "Shannen Speir",
    "salary": 525,
    "age": 50
}, {
    "id": 8,
    "name": "Albert Betke",
    "salary": 113,
    "age": 26
}, {
    "id": 9,
    "name": "Terese Mawer",
    "salary": 721,
    "age": 42
}, {
    "id": 10,
    "name": "Emmerich Rodge",
    "salary": 625,
    "age": 29
}];

//1.1 Вычислить среднюю зарплату всех работников и вернуть.
function getSumSalary(employee) {
    if (Array.isArray(employee)) {
        let sumSalary = employee.reduce((acc, curr) => {
            return acc + curr.salary
        }, 0);
        return sumSalary;
    } else {
        console.log('Entered value is not an array.');
    }
}
let amountSalary = getSumSalary(employee);
console.log(amountSalary);

//1.2 Изменить имена всех сотрудников, приписав к ним префикс “Front End Camp Employee - EMPLOYEE_NAME” и вернуть измененный массив.
function getChangedNames(employee) {
    if (Array.isArray(employee)) {
        let changedNames = employee.map((elem) => {
            elem.name = 'Front End Camp Employee - ' + elem.name;
            return elem;
        });
        return changedNames;
    } else {
        console.log('Entered value is not an array.');
    }
}
let changedNames = getChangedNames(employee);
changedNames.forEach(elem => console.log(elem));

//1.3 Оставить в массиве только тех работников, у которых возраст ниже 30 и вернуть массив.
function getFilteredAges(employee) {
    if (Array.isArray(employee)) {
        let filteredAges = employee.filter((elem) => {
            return elem.age < 30;
        });
        return filteredAges;
    } else {
        console.log('Entered value is not an array.');
    }
}
let filteredAges = getFilteredAges(employee);
filteredAges.forEach(elem => console.log(elem));

//1.4 В данном случае функция будет принимать еще и второй параметр, в который мы будем отправлять строку. 
//Функция должна найти в массиве объект, у которого имя содержит ту строку, которую мы пытаемся найти и вернуть этот объект. 
//Если такого объекта не существует, то функция возвращает строку "Not found".
function getFoundName(employee, searchName) {
    if (Array.isArray(employee) && searchName) {
        let foundName = employee.find((elem) => {
            return elem.name == searchName;
        })
        if (foundName) {
            return foundName;
        } else {
            return 'Not found.'
        }
    } else {
        console.log('Oops. Something went wrong');
    }
}
let foundName = getFoundName(employee, 'Axe Lofthouse');
console.log(foundName);

//1.5 Вернуть имена всех работников в одной строке - “Our employees list is: “EMPLOYEE_NAME_1, EMPLOYEE_NAME_2, EMPLOYEE_NAME_3”. 
//В данном случае разрешается изменить массив, если нужно.
function getAllNames(employee) {
    if (Array.isArray(employee)) {
        employee = employee.map((elem) => {
            return elem.name;
        }).join('\n');
        let allNames = 'Our employees list is:\n';
        allNames += employee;
        return allNames;
    } else {
        console.log('Entered value is not an array.');
    }
}
let allNames = getAllNames(employee);
console.log(allNames);

//1.6 В данном случае функция также будет принимать второй параметр - строку “age” или “salary”. 
//Вернуть массив, в котором элементы отсортированы по возрасту или зарплате соответственно
function sortEmployee(employee, criterion) {
    if (Array.isArray(employee) && criterion) {
        if (criterion === 'age') {
            let sort = employee.sort((a, b) => {
                return a.age - b.age
            })
            return sort;
        } else if (criterion === 'salary') {
            let sort = employee.sort((a, b) => {
                return a.salary - b.salary
            })
            return sort;
        } else {
            console.log("Sorry, but there is no such sorting criterion.");
        }
    } else {
        console.log('Oops. Something went wrong.');
    }
}
let sortedEmpl = sortEmployee(employee, 'salary');
sortedEmpl.forEach(elem => console.log(elem));
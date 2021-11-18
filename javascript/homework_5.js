// // // Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. 
// // // Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"

function get_order(string) {
    if (!isNaN(string)) {
        console.log('Данные введены некорректно');
    }
        let result;
        let element;  
        let word = string.split(' ');
            element = word.sort();
            result = element.join(' ')
    return result;
}
let a = get_order('тетрадь ручка карандаш');
console.log(a);

// // // Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr

function get_random(arr) {
    if (Array.isArray === arr) {
        console.log('Данные введены некорректно');
    }
    let result;

        result = arr[Math.floor(Math.random() * arr.length)];

    return result;
}
let a = get_random([1, 35, -5, 8, 9, 85]);
console.log(a);


// // // Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.

let array =  [1, 35, 5, 8, 9, 85, 100, 985];

function get_max(arr) {
    if (Array.isArray === arr) {
        console.log('Данные введены некорректно');
    }
    let max;
    let min = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            max = arr[i];
        }
    }
    return max;
}
console.log(get_max(array));

// Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. 
// // var points = {
// // "Вася": 200,
// // "Петя": 300,
// // "Даша": 250,
// // "Андрей": 150,
// // "Сергей": 450,
// // };
// // Найти имена тех, кто получает минимальную и максимальную оценку.

const POINTS = {
    'Вася': 200,
    'Петя': 300,
    'Даша': 250,
    'Андрей': 150,
    'Сергей': 450,
};

function sum(points) {
    let sum = 0;
    for (let point of Object.values(points)) {
      sum += point;
    }
    console.log(`Сумма всех оценок ${sum}`);
}
function min(points) {
    let min = points[Object.keys(points)[0]];
    let name;
    for (const key in points) {
        if (points[key] < min) {
            min = points[key];
            name = key;
            console.log(`Минимальную оценку ${min} баллов получил ${name}`);
        }
    }
}
function max(points) {
    let max = points[Object.keys(points)[0]];
    let name;
    for (const key in points) {
        if (points[key] > max) {
            max = points[key];
            name = key;
            console.log(`Максимальную оценку ${max} баллов получил ${name}`);
        }
    }
}
sum(POINTS);
min(POINTS);
max(POINTS);






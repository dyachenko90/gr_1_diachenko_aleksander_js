// // Задача № 1
let _number_first = prompt('Введите первое число');
let _number_second = prompt('Введите второе число');
_number_first = Number(_number_first);
_number_second = Number(_number_second);

if (isNaN(_number_first) || isNaN(_number_second)) {
    console.error('Данные введены неверно');
} else {
    let max_number = Math.max(_number_first, _number_second);
    let min_number = Math.min(_number_first, _number_second);
    let quantity = 0;
    let sum = 0;
        for (let i = min_number; i <= max_number; i += 1) {
            if (i % 6 === 0) {
                sum = sum + i;
                quantity = Math.trunc((max_number - min_number)/6);
            }
        }
    alert(`Количество чисел диапазона кратных шести - ${quantity}, cумма чисел диапазона кратных шести - ${sum} `);
}

// // Задача № 2
const MAX_QUANTITY_ATTEMPTS = 5;
let min = 0;
let max = 100;
let attempt = 0;
do {
    _number = min + (max - min) / 2;
    let question = confirm(`Ваше число больше ${_number}`);
    attempt += 1;
    if (question) {
        min = _number;
    } else {
        max = _number;
    }
    console.log(max, min);
} while ((max - min) > 1 || attempt < MAX_QUANTITY_ATTEMPTS);
    alert('Результат' + Math.trunc(max));
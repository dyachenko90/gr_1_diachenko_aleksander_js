// let numeric = prompt ('Введите число');
// numeric = Number(numeric);
// input_first = numeric%10;
// input_second = numeric%100;
// if (input_second == 11 || input_second == 12 || input_second == 13 || input_second == 14) {
//     alert(`${numeric} дней`);
// } else if (input_first == 1) {
//     alert(`${numeric} день`);
// } else if (input_first == 2 || input_first == 3 || input_first == 4) {
//     alert(`${numeric} дня`);
// } else {
//     alert (`${numeric} дней`);

let n = prompt('Введите расстояние (км)');
let d = prompt('Введите размер колеса (дюйм)');
const PI = 3.14;
const D = 2.54;
n = Number(n);
d = Number(d);
if (n==Number(n) || d==Number(d)) {
    console.log('Данные введены правильно');
} else {
    console.log('Введите корректные данные');
}
result = Math.round(n/((d*PI*D/10**5)));
alert(`Количество оборотов одного колеса: ${result}`);
alert(`Сумма оборотов всех колес: ${result*4}`);








// Задача №1
let numeric = prompt('Введите число');
numeric = Number(numeric);

input_first = numeric % 10;
input_second = numeric % 100;

if (numeric > 10 && numeric < 20) {
    alert(`${numeric} дней`);
} else if (input_first === 1) {
    alert(`${numeric} день`);
} else if (input_first === 2 || input_first === 3 || input_first === 4) {
    alert(`${numeric} дня`);
} else {
    alert (`${numeric} дней`);
}

// Задача №2
let N = prompt('Введите расстояние (км)');
let D = prompt('Введите размер колеса (дюйм)');

N = Number(N);
D = Number(D);

const МETERS_IN_KILOMETERS = 1000;
const METERS_IN_INCH = 0.0254;
const PI = 3.14;

if (isNaN(N) || isNaN(D)) {
    console.log('Данные введены неверно');
} else {
    N = N * МETERS_IN_KILOMETERS;
    D = D * METERS_IN_INCH;

    let result_one_turn = N / (D * PI);
    let result_four_turn = 4 * result_one_turn;

    alert(`Количество оборотов одного колеса: ${Math.trunc(result_one_turn)}`);
    alert(`Сумма оборотов всех колес: ${Math.trunc(result_four_turn)}`);
}








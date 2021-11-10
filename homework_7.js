// Ч1
// С помощью функции-конструктора, написать создание объекта Калькулятор. 
// Функция конструктор принимает в качестве единственного параметра название калькулятора.

// function Calculator (name) {
//     this.name = name;
// }
// let fn = new Calculator('Мой калькулятор');
// console.log(fn);


// Ч2
// Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
// В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
// Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, 
// второй параметр вычитатель/делитель.

// function Calculator (name) {
//     this.name = name;
// }
// let calculator = new Calculator('Мой калькулятор');
// console.log(calculator);

//     calculator.add = function() {
//         if (isNaN(arguments)) {
//             let result = 0;
//             for (let i = 0; i < arguments.length; i += 1) {
//                 result += arguments[i];
//             }
//             return result;
//         }
//         return null;
//     }
//     console.log(`Результат сложения: ${calculator.add(6, 8)}`);

//     calculator.division = function(a, b) {
//         if (!isNaN(a) || !isNaN(b)) {
//             let result = 0;
//             result = a / b;
//             return result;
//         }
//         return null;
//     }
//     console.log(`Результат деления: ${calculator.division(4, 2)}`);

//     calculator.subtraction = function(a, b) {
//         if (!isNaN(a) || !isNaN(b)) {
//             let result = 0;
//             result = a - b;
//             return result;
//             } 
//         return null;
//     }
//     console.log(`Результат вычитания: ${calculator.subtraction(5, 2)}`);

//     calculator.multiply = function () {
//         if (isNaN(arguments)) {
//             let result = 1;
//             for (let i = 0; i < arguments.length; i += 1) {
//                 result *= arguments[i];
//             }
//             return result;
//         }
//         return null;
//     }
//     console.log(`Результат умножения: ${calculator.multiply(3, 5, 6, 9, 90)}`);


// Ч3
// Калькулятор должен хранить историю действий в виде строки в таком формате: 
// Имя калькулятора (Дата Время): действие, результат, (параметры).
// Например после действия сумма в истории должна появится такая запись: 
// "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
// Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.

// Ч1
// С помощью функции-конструктора, написать создание объекта Калькулятор. 
// Функция конструктор принимает в качестве единственного параметра название калькулятора.
// Ч2
// Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
// В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
// Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, 
// второй параметр вычитатель/делитель.
// Ч3
// Калькулятор должен хранить историю действий в виде строки в таком формате: 
// Имя калькулятора (Дата Время): действие, результат, (параметры).
// Например после действия сумма в истории должна появится такая запись: 
// "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
// Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.

let calculator = new Calculator('Мой калькулятор');
let inf = [];
calculator.operation.multiply(7, 7, 7);
calculator.operation.add(7, 7, 7);
calculator.operation.subtraction(7, 1);
calculator.operation.division(4, 2);
calculator.memory.addMemory();
calculator.memory.clearMemory();

function Calculator(name) {
    this.name = name,
    this.memory = {
        addMemory: function () {
            console.log(inf);
            for (let i = 0; i <= inf.length - 1; i += 1) {
                console.log(inf[i]);
            }
        },
        clearMemory: function () {
            inf = [];
            console.log('Память очищена', inf)
        },
    },
    this.operation = {
        add: function(...args) {
            if (isNaN(args)) {
                let result = 0;
                for (let i = 0; i < args.length; i += 1) {
                    result += args[i];
                }
                inf.push(`${name} ${date()}результат сложения = ${result}, (${args})`);
            }
            return null;
        },    
        division: function(a, b) {
            if (!isNaN(a) || !isNaN(b)) {
                let result = 0;
                result = a / b;
                inf.push(`${name} ${date()}результат деления = ${result}, (${a},${b})`);
            }
            return null;
        },
        subtraction: function(a, b) {
            if (!isNaN(a) || !isNaN(b)) {
                let result = 0;
                result = a - b;
                inf.push(`${name} ${date()}результат вычитания = ${result}, (${a},${b})`);
            } 
            return null;
        },
        multiply: function (...args) {
            if (isNaN(args)) {
                let result = 1;
                for (let i = 0; i < arrg.length; i += 1) {
                    result *= args[i];
                }
                inf.push(`${name} ${date()}результат умножения = ${result}, (${args})`);
            }
            return null;
        },
    }
}
function date(date) {
    let result;
    date = new Date();
    let today = date.getMonth() + 1;
    result = `(${date.getDate()}.${today}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}): `;
    return result;
}




    

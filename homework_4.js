// Задача № 1 Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.

    let _array = [8, 7, 13, 15, 69, 85, 5, 2, 1];  
    function get_min(num1, num2) {
        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    };
    console.log(_array.reduce(get_min));

   
// Задача № 2 Создайте массив с четными числами в диапазоне от 500 до 888 включительно.

    let _array = [];
        for (let i = 500; i <= 888; i += 1) {
            if (i % 2 === 0) {
                _array.push(i);
        }
    }
    console.log(_array);


// Задача № 3 Необходимо написать функцию, которая принимает слово в виде строки, 
// функция будет возвращать слово с буквами в обратном порядке, 
// например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».

    let input = prompt('Напишите любое слово');
    if (!isNaN(input)) {
        console.error('Введите корректные данные');
    } else {
        function reverseWord(string) {
            return string.split('').reverse().join('');
        }
    alert(reverseWord(input));
    }
// Вариант без функции

let input = prompt('Напишите любое слово');
    if (!isNaN(input)) {
        console.error('Введите корректные данные');
    } else {
        let _array = [];
        _array = input.split('').reverse().join('');
        alert(_array);
    }


// Задача № 4 ЗАДАНИЕ С ВЫСОКИМ УРОВНЕМ
// Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города. 
// Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко. 
// Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».

let input = prompt('Введите название города');
    if (!isNaN(input)) {
        console.error('Введите корректные данные');
    } else {
        let _array = [];
        let firstLetter = _array.length - 1;
        let laxtLetter = _array[0];
        _array = input.split('');
        console.log(_array);
    }        if (prevArray === nextArray) {
            point = point + 1;
        console('У Вас +1 очко');
    }

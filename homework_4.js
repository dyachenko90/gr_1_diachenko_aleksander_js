// Задача № 1 Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.

    function get_min(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            let result = arr[0];

            for (let i = 0; i < arr.length; i += 1) {
                let element = arr[i];
                if (element < result) {
                    result = element;
                }
            }
            return result;
        }
    }
    let array = [8, 7, 13, 15, -2, 69, 85, 5, 2, 1];
    let min = get_min(array);
    console.log(min);

   
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

function start_game_city_chain(first_city = "Киев") {
  if (typeof first_city !== "string") {
    return false;
  }

  function add_to_memory(memory_array, city) {
    memory_array.push(city.toLowerCase());
  }

  let cities = [first_city];
  add_to_memory(cities, first_city);
  let points = 0;

  while (true) {
    let new_city = prompt("Введите название города", "");
    console.log(new_city.toLowerCase()),
      cities,
      cities.indexOf(new_city.toLowerCase());
    if (cities.indexOf(new_city) > -1) {
      alert("Такой город уже вводился");
    }

    let prev_city = cities[cities.length - 1];

    let last_char = prev_city[prev_city.length - 1];
    let first_char = new_city[0];

    last_char = last_char.tolowerCase();
    first_char = first_char.tolowerCase();

    if (last_char === first_char) {
      points++;
      add_to_memory(cities, new_city);
    } else {
      alert(`Игра окончена. Ваши очки: ${points}`);
      break;
    }

    console.log(last_char, first_char);
  }
}
start_game_city_chain("Краматорск");

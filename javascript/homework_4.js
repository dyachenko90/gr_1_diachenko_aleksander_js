// // Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.
    let _array = [8, 7, 13, 15, 69, 85, 5, 2, 1];  
    function get_min(num1, num2) {
        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    };
    console.log(_array.reduce(get_min));

   
// // Создайте массив с четными числами в диапазоне от 500 до 888 включительно.
    let _array = [];
        for (let i = 500; i <= 888; i += 1) {
            if (i % 2 === 0) {
                _array.push(i);
        }
    }
    console.log(_array);


// // Необходимо написать функцию, которая принимает слово в виде строки, 
// // функция будет возвращать слово с буквами в обратном порядке, 
// // например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».
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


// ЗАДАНИЕ С ВЫСОКИМ УРОВНЕМ
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
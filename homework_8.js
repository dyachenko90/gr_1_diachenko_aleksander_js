//Написать код, который будет выполнять 4 действия на странице index.html:
// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
// 4. Удалить все квадраты, и сделать фон страницы черным.
// Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.


let div = document.createElement('div');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
let div6 = document.createElement('div');
let div7 = document.createElement('div');
let div8 = document.createElement('div');
let div9 = document.createElement('div');
let array = [];


function toBlue(div) {
    div.setAttribute('style', 'background-color: blue; width: 50px; height: 50px; margin-top: 8px');
    document.body.prepend(div);
}

function toGreen(div) {
    div.setAttribute('style', 'background-color: green; width: 100px; height: 100px; margin-top: 8px');
    document.body.prepend(div);
}

function toRedYellow(div) {
    array.push(div);
    console.log(array);
        for (let i = 0; i <= array.length + 1; i += 1) {
        if ((i % 3) === 0) {
            div.setAttribute('style', 'background-color: red; width: 100px; height: 100px; margin-top: 8px');
        } else {
            div.setAttribute('style', 'background-color: yellow; width: 100px; height: 100px; margin-top: 8px');
        }
    }
    document.body.prepend(div);
}

function toRemove(div) {
    div.remove();
    document.body.style.backgroundColor = 'black';
}

setTimeout(toBlue, 3000, div);
setTimeout(toBlue, 3000, div1);
setTimeout(toBlue, 3000, div2);
setTimeout(toBlue, 3000, div3);
setTimeout(toBlue, 3000, div4);
setTimeout(toBlue, 3000, div5);
setTimeout(toBlue, 3000, div6);
setTimeout(toBlue, 3000, div7);
setTimeout(toBlue, 3000, div8);
setTimeout(toBlue, 3000, div9);

setTimeout(toGreen, 6000, div);
setTimeout(toGreen, 6000, div1);
setTimeout(toGreen, 6000, div2);
setTimeout(toGreen, 6000, div3);
setTimeout(toGreen, 6000, div4);
setTimeout(toGreen, 6000, div5);
setTimeout(toGreen, 6000, div6);
setTimeout(toGreen, 6000, div7);
setTimeout(toGreen, 6000, div8);
setTimeout(toGreen, 6000, div9);

setTimeout(toRedYellow, 9000, div);
setTimeout(toRedYellow, 9000, div1);
setTimeout(toRedYellow, 9000, div2);
setTimeout(toRedYellow, 9000, div3);
setTimeout(toRedYellow, 9000, div4);
setTimeout(toRedYellow, 9000, div5);
setTimeout(toRedYellow, 9000, div6);
setTimeout(toRedYellow, 9000, div7);
setTimeout(toRedYellow, 9000, div8);
setTimeout(toRedYellow, 9000, div9);

setTimeout(toRemove, 12000, div);
setTimeout(toRemove, 12000, div1);
setTimeout(toRemove, 12000, div2);
setTimeout(toRemove, 12000, div3);
setTimeout(toRemove, 12000, div4);
setTimeout(toRemove, 12000, div5);
setTimeout(toRemove, 12000, div6);
setTimeout(toRemove, 12000, div7)
setTimeout(toRemove, 12000, div8)
setTimeout(toRemove, 12000, div9)


// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

let div1 = document.createElement('div');
div1.setAttribute('style', 'background-color: red; width: 700px; height: 500px; margin-top: 8px');
document.body.prepend(div1);
div1.className = "div1";
div1.addEventListener('mouseenter', () => {
    console.log(`Ширина прямоугольника: ${div1.style.height}, длина прямоугольника: ${div1.style.width}`);
  });
div1.addEventListener("click", () => {
    alert('Цвет прямоугольника - красный');
});


let div2 = document.createElement('div');
div2.setAttribute('style', 'background-color: yellow; width: 900px; height: 500px; margin-top: 8px');
document.body.prepend(div2);
div2.className = "div2";
div2.addEventListener('mouseenter', () => {
    console.log(`Ширина прямоугольника: ${div2.style.height}, длина прямоугольника: ${div2.style.width}`);
});
div2.addEventListener("click", () => {
    alert('Цвет прямоугольника - желтый');
});


//Написать код, который будет выполнять 4 действия на странице index.html:
// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
// 4. Удалить все квадраты, и сделать фон страницы черным.
// Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.

function toCreateAndBlue () {
    for (let i = 0; i < 10; i += 1) {
        let div = document.createElement('div');
        div.classList.add('style1')
        div.setAttribute('style', 'background-color: blue; width: 50px; height: 50px; margin-top: 8px');
        document.body.prepend(div);
    }
}

function toGreen() {
    let divs = document.querySelectorAll('.style1');
    for (let i = 0; i < divs.length; i += 1) {
        divs[i].setAttribute('style', 'background-color: green; width: 100px; height: 100px; margin-top: 8px');
        divs[i].classList.add('style2');
    }
}

function toRedYellow() {
    let divs = document.querySelectorAll('.style2');
    for (let i = 0; i < divs.length; i += 1) {
        if ((i + 1) % 3 === 0) {
            divs[i].setAttribute('style', 'background-color: red; width: 100px; height: 100px; margin-top: 8px');
        } else {
            divs[i].setAttribute('style', 'background-color: yellow; width: 100px; height: 100px; margin-top: 8px');
        }
    }
}

function toRemove() {
    let divs = document.querySelectorAll('.style2');
    for (let i = 0; i < divs.length; i += 1) {
        divs[i].remove();
    }
    document.body.style.backgroundColor = 'black';
}

setTimeout(toCreateAndBlue, 3000);
setTimeout(toGreen, 6000);
setTimeout(toRedYellow, 9000);
setTimeout(toRemove, 12000);


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


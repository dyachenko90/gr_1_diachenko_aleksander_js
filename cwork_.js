// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает их горизонтально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки.
// 5. Удалить все красные квадраты.
// Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.


function toCreateAndBlue () {
    for (let i = 0; i < 1000; i += 1) {
        let div = document.createElement('div');
        div.setAttribute('style', 'background-color: blue; width: 70px; height: 70px; margin-top: 8px; margin-right: 8px');
        document.body.style.display = 'flex';
        document.body.style.flexWrap = 'wrap';
        div.classList.add('style1')
        document.body.prepend(div);
    }
}

function toPurple() {
    let divs = document.querySelectorAll('.style1');
    for (let i = 0; i < divs.length; i += 1) {
        divs[i].setAttribute('style', 'background-color: purple; width: 100px; height: 100px; margin-top: 8px; margin-right: 8px');
        divs[i].classList.add('style2');
    }
}
function toNumber() {
    let divs = document.querySelectorAll('.style2');
    for (let i = 0; i < divs.length; i += 1) {
        divs[i].textContent = i;
        divs[i].classList.add('style3');
    }
}

function toRedTriangle() {
    let divs = document.querySelectorAll('.style3');
    for (let i = 0; i < divs.length; i += 1) {
        if ((i + 1) % 3 === 0) {
            divs[i].setAttribute('style', 'background-color: red; width: 100px; height: 100px; margin-top: 8px; margin-right: 8px');
        } else if ((i + 1) % 15 === 0) {
            divs[i].setAttribute('style', 'width: 0px; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid khaki; margin-top: 8px; margin-right: 8px');
        }
        divs[i].classList.add('style4');
    }
}

function toRemoveRed() {
    let divs = document.querySelectorAll('.style4');
    for (let i = 0; i < divs.length; i += 1) {
        if ((i + 1) % 3 === 0) {
            divs[i].remove();
        }
    }
}

setTimeout(toCreateAndBlue, 2000);
setTimeout(toPurple, 4000);
setTimeout(toNumber, 6000);
setTimeout(toRedTriangle, 8000);
setTimeout(toRemoveRed, 10000);


// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.


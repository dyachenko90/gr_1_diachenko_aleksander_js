// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает их горизонтально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки.
// 5. Удалить все красные квадраты.
// Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.

$(document).ready(function () {
    
    function toCreateAndBlue() {
        for (let i = 0; i < 1000; i += 1) {
            $("body").append("<div></div>");
            $("body div").addClass("style1");
        }
    }
    function toPurple() {
        let divs = $(".style1");
        for (let i = 0; i < divs.length; i += 1) {
            divs.addClass("style2");
        }
    }

    function toNumber() {
        let divs = document.querySelectorAll(".style2");
        for (let i = 0; i < divs.length; i += 1) {
            divs[i].innerHTML = i;
            console.log(typeof divs);
        }
    }

    function toRedTriangle() {
        let divs = $("body div:nth-child(3n+1)");

        for (let i = 0; i < divs.length; i += 1) {
            divs.addClass("style3");
            divs.removeClass("style1 style2");
        }
        let divs2 = $("body div:nth-child(15n+1)");
        for (let i = 0; i < divs2.length; i += 1) {
            divs2.addClass("triangle");
        }
        divs2.removeClass("style3");
    }

    function toRemoveRed() {
        if ($("body div")) $(".style3").remove();
    }

    setTimeout(toCreateAndBlue, 2000);
    setTimeout(toPurple, 4000);
    setTimeout(toNumber, 6000);
    setTimeout(toRedTriangle, 8000);
    setTimeout(toRemoveRed, 10000);
});


// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.


$(document).ready(function () {

    $("body").append("<div></div>");
    $("div")
        .addClass("div1")
        .css({ width: "700px", height: "500px", background: "red" });

    $(".div1").mouseenter(function () {
        console.log("Ширина прямоугольника: 700px, высота прямоугольника: 500px");
    });

    $(".div1").click(function () {
        alert("Красный");
    });


    $("body").append("<div></div>");
    $("body div:last-child")
        .addClass("div2")
        .css({ width: "900px", height: "500px", background: "yellow" });

    $(".div2").mouseenter(function () {
        console.log("Ширина прямоугольника: 900px, высота прямоугольника: 500px");
    });

    $(".div2").click(function () {
        alert("Жёлтый");
    });
});


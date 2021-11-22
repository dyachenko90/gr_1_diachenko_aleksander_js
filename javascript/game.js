$(document).ready(function () {
    // utils.js --------------

    function getGameTime(date) {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
    }

    // ----------------------

    const GAME_STEP_DELAY = 2;

    const objects = [];

    function Ball(options) {
        this.id = Math.trunc(1000 * Math.random());
        this.color = options.color;
        this.size = options.size;
        this.height = this.size * 8;
        this.width = this.size * 8;

        this.x = 300;
        this.y = 300;

        this.directionX = 1;
        this.directionY = 1;

        this._createView = function () {
            let result = document.createElement("div");
            result.innerText = this.id;
            result.style.cssText = `
			display: inline-block;
			position: absolute;
			background: ${this.color};
			border: 1px solid black;
			border-radius: 50%;
			height: ${this.height}px;
			width: ${this.width}px;
			margin: 0;
			text-align:center;`;

            document.body.append(result);

            return result;
        };

        this._div = this._createView();

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.renderState = function () {
            this.x = this.x + this.directionX;
            this.y = this.y + this.directionY;
        };

        this.renderView = function () {
            this._div.style.left = `${this.x}px`;
            this._div.style.top = `${this.y}px`;
        };
    }

    function Wall(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;

        this._createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
			display: inline-block;
			position: absolute;
			left: ${this.x}px;
			top: ${this.y}px;
			width: ${this.width}px;
			height: ${this.height}px;
			background: white;
			`;

            document.body.append(result);
            return result;
        };

        this._div = this._createView();

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.renderState = function () {};

        this.renderView = function () {};
    }

    function Racket(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = Math.min(options.width, 100);
        this.width = Math.max(this.width, 10);
        this.height = Math.min(options.height, 100);
        this.height = Math.max(this.height, 10);

        this._createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
			display: inline-block;
			position: absolute;
			left: ${this.x};
			top: ${this.y};
			width: ${this.width}px;
			height: ${this.height}px;
			background: orange;
			`;

            document.body.append(result);
            return result;
        };

        this._div = this._createView();

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.renderState = function () {};

        this.renderView = function () {
            this._div.style.left = `${this.x}px`;
            this._div.style.top = `${this.y}px`;
        };

        this.onMouseMove = function (event) {
            this.x = event.x;
        };
    }
    function Skittle () {
        const div = document.createElement("div");

        this._div = div;

        this.getDiv = function () {
            return this._div;
        };

        this.x = 0;
        this.y = 0;
        this.width = 65;
        this.height = 20;

        div.style.cssText = `
			display: inline-block;
			background: teal;
			height: 20px;
			width: 60px;
			margin: 5px;`;

        this.renderState = function () {
            const rect = this.getDiv().getBoundingClientRect();

            this.x = rect.x;
            this.y = rect.y;
        };

        this.setPosition = function () {
            Object.assign(this.getDiv().style, {
                left: `${this.x}px`,
                top: `${this.y}px`,
            });
        };

        this.makeAbsolute = function () {
            Object.assign(this.getDiv().style, {
                position: "absolute",
            });
        };

        this.live = function () {};

        this.remove = function () {
            this._div.remove();
        };
    }

    for (let i = 0; i < 152; i++) {
        const SKITTLE = new Skittle();
        let skittles = document.querySelector(".skittles");
        skittles.append(SKITTLE.getDiv());

        objects.push(SKITTLE);
    }

    objects.forEach((item) => {
        if (item instanceof Skittle) {
            item.renderState();
            item.setPosition();
        }
    });

    objects.forEach((item) => {
        item instanceof Skittle && item.makeAbsolute();
    });

    objects.push(
        new Ball({
            color: "grey",
            size: 3,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
        })
    );

    objects.push(
        new Wall({
            x: document.documentElement.clientWidth - 10,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: document.documentElement.clientWidth,
            height: 10,
        })
    );

    let r = new Racket({
        y: document.documentElement.clientHeight - 20,
        width: 100,
        height: 20,
    });
    objects.push(r);
    document.addEventListener("mousemove", r.onMouseMove.bind(r));

    function checkCollision(objectA, objectB) {
        if (objectA !== objectB) {
            let ball = null;
            let wall = null;
            let racket = null;
            let skittle = null;
            if (objectA instanceof Ball) {
                ball = objectA;
            } else if (objectA instanceof Wall) {
                wall = objectA;
            }

            if (objectB instanceof Ball) {
                ball = objectB;
            } else if (objectB instanceof Wall) {
                wall = objectB;
            }

            if (objectA instanceof Racket) {
                racket = objectA;
            } else if (objectB instanceof Racket) {
                racket = objectB;
            }

            if (objectA instanceof Skittle) {
                skittle = objectA;
            } else if (objectB instanceof Skittle) {
                skittle = objectB;
            }

            if (ball && wall) {
                if (
                    (ball.x === wall.x || ball.x + ball.width === wall.x) &&
                    ball.y > wall.y &&
                    ball.y < wall.height
                ) {
                    ball.directionX = ball.directionX * -1;
                }

                if (ball.y === wall.y) {
                    ball.directionY = ball.directionY * -1;
                }
            }

            if (ball && racket) {
                if (
                    ball.x > racket.x &&
                    ball.x < racket.x + racket.width &&
                    ball.y + ball.height === racket.y
                ) {
                    ball.directionY = ball.directionY * -1;
                }
            }

            if (ball && skittle) {
                const ballMiddle = ball.width / 2 + ball.x;

                const skittleMarginRight = parseInt(
                    skittle.getDiv().style.marginRight
                );
                const skittleMarginLeft = parseInt(
                    skittle.getDiv().style.marginLeft
                );

                const touchInMainWidth =
                    ballMiddle > skittle.x && ballMiddle < skittle.x + skittle.width;

                const touchWothMargin =
                    ballMiddle > skittle.x + skittleMarginLeft &&
                    ballMiddle < skittle.x + skittle.width + skittleMarginRight;

                if (
                    (touchInMainWidth || touchWothMargin) &&
                    ball.y === skittle.y + skittle.height + 2
                ) {
                    ball.directionY = ball.directionY * -1;

                    skittle.remove();
                }
            }
        }
    }

    function isGameOver(ball, racket) {
        return ball.y > racket.y;
    }

    function doGameStep() {
        let gameOver = false;

        let currentGameTime = getGameTime(new Date());

        for (let i = 0; i < objects.length; i++) {
            objects[i].live();
        }

        for (let i = 0; i < objects.length; i++) {
            let objectA = objects[i];
            for (let j = i + 1; j < objects.length; j++) {
                let objectB = objects[j];
                checkCollision(objectA, objectB);
            }
        }

        let ball = objects.find((item) => item instanceof Ball);
        let racket = objects.find((item) => item instanceof Racket);
        gameOver = isGameOver(ball, racket);

        currentGameStep++;
        if (currentGameStep < 1000000 && !gameOver) {
            setTimeout(doGameStep, GAME_STEP_DELAY);
        } else {
            alert("***G A M E  O V E R***");
        }
    }

    let currentGameStep = 0;
    setTimeout(doGameStep, GAME_STEP_DELAY);
});

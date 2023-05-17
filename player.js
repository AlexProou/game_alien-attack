
export class Player {
    constructor(game) {
        this.game = game;
        this.spriteWidth = 50;
        this.spriteHeight = 80;
        this.frameX = 0;
        this.frameY = 3;
        this.maxFrame = 3;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = 200;
        this.y = 300;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 5;
        this.image = document.getElementById('player1');
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;


    }
    draw(context) {

        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)


    }
    setSpeed(speedX, speedY) {
        this.speedX = speedX;
        this.speedY = speedY;

    }
    update(deltaTime) {
        if (this.game.lastKey == 'PArrowLeft') {
            this.setSpeed(-this.maxSpeed, 0);
            this.frameY = 1;
        } else if (this.game.lastKey == 'RArrowLeft' && this.speedX < 0) {
            this.setSpeed(0, 0);
            this.frameY = 3;


        } else if (this.game.lastKey == 'PArrowRight') {
            this.setSpeed(this.maxSpeed, 0);
            this.frameY = 3;
        } else if (this.game.lastKey == 'RArrowRight' && this.speedX > 0) {
            this.setSpeed(0, 0);
            this.frameY = 3;


        } else if (this.game.lastKey == 'PArrowUp') {
            this.setSpeed(0, -this.maxSpeed * 0.6);
            this.frameY = 0;
        } else if (this.game.lastKey == 'RArrowUp' && this.speedY < 0) {
            this.setSpeed(0, 0);
            this.frameY = 3;


        } else if (this.game.lastKey == 'PArrowDown') {
            this.setSpeed(0, this.maxSpeed * 0.6);
            this.frameY = 2;
        } else if (this.game.lastKey == 'RArrowDown' && this.speedY > 0) {
            this.setSpeed(0, 0);
            this.frameY = 3;

        }




        this.x += this.speedX;
        this.y += this.speedY;

        //horiz boundaries
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > this.game.width - this.width) {
            this.x = this.game.width - this.width;
        }

        //vertic boundaries
        if (this.y < this.game.topMargin) {
            this.y = this.game.topMargin;
        } else if (this.y > this.game.height - this.height) {
            this.y = this.game.height - this.height;
        }

        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX < this.maxFrame) {
                this.frameX++;
            } else {
                this.frameX = 0;
            }
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }





    }



}




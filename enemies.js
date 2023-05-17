class Enemy {
    constructor() {
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;


    }
    update(deltaTime) {

        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        if (this.x + this.width < 0) this.markedForDeletion = true;



        if (this.y < this.game.topMargin) {
            this.y = this.game.topMargin;
        } else if (this.y > this.game.height - this.height) {
            this.y = this.game.height - this.height;
        }



    }
    draw(context) {

        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height)
      
    }
}


export class AlienEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 110;
        this.height = 100;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random() * 500 + 200;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 0;
        this.image = document.getElementById('alien_enemy');
        this.angle = 0;
        this.va = Math.random() + 0.1 + 0.1;
        this.lives = 1;
        this.score = this.lives;
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.angle += this.va;
        this.y += Math.sin(this.angle);

    }

}


export class KnightEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 140;
        this.height = 150;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random() * 340 + 100;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 5;
        this.image = document.getElementById('alien_enemy_2');
        this.angle = 0;
        this.va = Math.random() + 0.1 + 0.1;
        this.lives = 3;
        this.score = this.lives;
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.angle += this.va;

    }

}


export class BigMonsterEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 180;
        this.height = 200;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random() * 340 + 100;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 3;
        this.image = document.getElementById('alien_enemy_3');
        this.angle = 0;
        this.va = Math.random() + 0.1 + 0.1;
        this.lives = 5;
        this.score = this.lives;
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.angle += this.va;

    }
}



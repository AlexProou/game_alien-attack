import { InputHandler } from './input.js';
import { Player } from './player.js';
import { AlienEnemy, KnightEnemy, BigMonsterEnemy } from './enemies.js';
import { Projectile } from './projectile.js';
import { UI } from './UI.js';
import { CollisionAnimation } from './collisionAnimation.js';
import { Background } from './background.js';

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.background = new Background(this);
            this.topMargin = 200;
            this.speed = 0;
            this.lastKey = undefined;
            this.input = new InputHandler(this);
            this.player = new Player(this);
            this.projectile = new Projectile(this);
            this.UI = new UI(this);
            this.collisions = [];
            this.projectiles = [];
            this.projectileTimer = 0;
            this.projectileInterval = 300;
            this.enemies = [];
            this.enemyTimer = 0;
            this.enemyInterval = 1000;
            this.time = 0;
            this.maxTime = 120000;
            this.gameOver = false;
            this.score = 0;
            this.winningScore = 250;
            this.fontColor = 'white';
            this.writeColor = '#44FF03EF'
            this.livesP = 5;
            this.gameOver = false;


        }

        update(deltaTime) {
            this.background.update();
            this.time += deltaTime;
            if (this.time > this.maxTime) this.gameOver = true;

            this.player.update(deltaTime);


            if (this.enemyTimer > this.enemyInterval) {
                this.addEnemy();
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);

                if (this.checkCollision(this.player, enemy)) {
                    enemy.markedForDeletion = true;

                    this.livesP--;
                    this.player.frameY = 4;
                    if (this.livesP <= 0) this.gameOver = true;

                }
                this.projectiles.forEach(projectile => {
                    if (this.checkCollision(projectile, enemy)) {
                        enemy.lives--;
                        projectile.markedForDeletion = true;
                        if (enemy.lives <= 0) {
                            enemy.markedForDeletion = true;

                            this.score += enemy.score;
                            this.collisions.push(new CollisionAnimation(this.game, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
                        }

                    }

                })

                if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1)

            });


            if (this.projectileTimer > this.projectileInterval) {
                this.addBullet();
                this.projectileTimer = 0;
            } else {
                this.projectileTimer += deltaTime;
            }
            this.projectiles.forEach(projectile => {
                projectile.update(deltaTime);
            })
            this.projectiles = this.projectiles.filter(projectile => !projectile.markedForDeletion);

            this.collisions.forEach((collision, index) => {
                collision.update(deltaTime);
                if (collision.markedForDeletion) this.collisions.splice(index, 1)
            })
        }
        draw(context) {
            this.player.draw(context);
            this.background.draw(context);

            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            this.projectiles.forEach(projectile => {
                projectile.draw(context);
            });

            this.UI.draw(context);

            this.collisions.forEach(collision => {
                collision.draw(context);
            })

        }
        addEnemy() {
            this.enemies.push(new AlienEnemy(this));
            console.log(this.enemies);

            setTimeout(() => {
                this.enemies.push(new KnightEnemy(this));
                console.log(this.enemies);
            }, 30000);

            setTimeout(() => {
                this.enemies.push(new BigMonsterEnemy(this));
                console.log(this.enemies);
            }, 50000)

        }
        addBullet() {
            this.projectiles.push(new Projectile(this));
            console.log(this.projectiles);

        }
        checkCollision(rect1, rect2) {
            return (
                rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y
            );


        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
    }

    animate(0);

});
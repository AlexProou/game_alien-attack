export class Projectile {
  constructor(game, x, y) {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 50;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.game = game;
    this.x = this.game.player.x;
    this.y = this.game.player.y + 27;
    this.width = 30;
    this.height = 30;
    this.speed = 5;
    this.speedX = 20;
    this.speedY = 0;
    this.maxFrame = 5;


    this.markedForDeletion = false;
    this.image = document.getElementById('bullet');
  }
  update(deltaTime) {
    this.x += this.speedX;

    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }

  }
  draw(context) {

    context.drawImage(this.image, this.x, this.y, this.width, this.height)

  }

}
export class UI {
  constructor(game) {
    this.game = game;
    this.fontFamily = '30px SoulMission'
    this.livesImage = document.getElementById('lives');
    this.bggameOver = document.getElementById('background_over');
    this.bggameOver2 = document.getElementById('background_over_2');
    this.bggameOver_win = document.getElementById('background_win');
    this.bggameOver2_win_w = document.getElementById('background_win_w');
  }
  draw(context) {
    context.save();
    context.font = "30px SoulMission";
    context.textAlign = 'left';
    context.fillStyle = this.game.fontColor;
    // score
    context.fillText('SCORE: ' + this.game.score, 20, 50);
    // timer
    context.font = this.fontSize * 0.8 + 'px' + this.fontFamily;
    context.fillText('TIME: ' + (this.game.time * 0.001).toFixed(1), 20, 80);

    // lives
    for (let i = 0; i < this.game.livesP; i++) {
      context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25)
    }


    // game over message
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + 'px' + this.fontFamily;
      if (this.game.score > this.game.winningScore) {
        context.drawImage(this.bggameOver_win, 0, 0, 1280, 720);
        context.drawImage(this.bggameOver2_win_w, 0, 0);

      } else {
        context.drawImage(this.bggameOver, 0, 0, 1280, 720);
        context.drawImage(this.bggameOver2, 0, 0); this.writeColor
        context.font = '40px SoulMission';
        context.fillStyle = this.game.writeColor;


        context.fillText('AND THE ALIENS CONQUERED THE EARTHE!!!', this.game.width * 0.5, this.game.height * 0.5 + 150);

      }


    }
    context.restore();

  }
}
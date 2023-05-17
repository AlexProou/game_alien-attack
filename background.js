export class Background {
    constructor(game){
        this.game = game;
        this.width = 800;
        this.height = 500;
        this.x = 0;
        this.y = 0;
        this.ufo = document.getElementById('background3');
        this.speedX = 2;
        this.minFrame = 0;
        this.maxFrame = 0;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;


    }  
    update(){
              
      if(this.x >= 0) this.x++;    
                   
    }
    draw(context){
        context.drawImage(this.ufo, this.x, this.y, 1280, 720);
   
}
}
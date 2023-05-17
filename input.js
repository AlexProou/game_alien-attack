export class InputHandler {
    constructor(game){
        this.game = game;
      
        window.addEventListener('keydown', e => {
            this.game.lastKey = 'P' + e.key;
            
            
        });
      
        window.addEventListener('keyup', e => {
            this.game.lastKey = 'R' + e.key;
            
        });

        window.addEventListener('onkeypress', e=> {
            if (e.key === ' ') {
                
                
        } 
        })


    } 
}
   
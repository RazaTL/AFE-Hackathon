import { Game } from 'script.js'

Game.prototype.movePlayer = function(event) {
    event.preventDefault();
    
    if (event.keyCode < 37 || event.keyCode > 40) {
      return;
    }
  
    switch (event.keyCode) {
        case 37:
        console.log("Hello!")
        this.move(3, 'WEST');
        break;
        
        case 38:       
        this.moveUp();
        break;

        case 39:
        this.moveRight();
        break;
            
        case 40:
        this.moveDown();
        break;
    }
  };

Game.prototype.move = function(units, direction) {
    
    for(var i = 0; i < units; i++){
        if(direction === 'EAST'){
            Game.prototype.moveRight();
        }
        if(direction === 'WEST'){
            Game.prototype.moveLeft();
        }
        if(direction === 'NORTH'){
            Game.prototype.moveUp();
        }
        if(direction === 'SOUTH'){
            Game.prototype.moveDown();
        }
    }


};
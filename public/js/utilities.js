// import { Game } from 'script.js'

const gameState = {
        map: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
            [0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        player: {
            x: 9,
            y: 1
        },
        goal: {
            x: 2,
            y: 3
        },
        theme: 'default',
        tileDim = 64,
};

// const gameCreateEl = () => {
//     gameState = {
//         ...gameState,
//         somethingElse: []
//     }
// }

const createTile = (x,y,type,img) => {
   // create one tile.
   let el = document.createElement('div');
       
   // two class names: one for tile, one or the tile type.
   el.className = type;
   
   // set width and height of tile based on the passed-in dimensions.
   el.style.width = el.style.height = this.tileDim + 'px';
   
   // set left positions based on x coordinate.
   el.style.left = x*tileDim + 'px';
   
   // set top position based on y coordinate.
   el.style.top = y*tileDim + 'px';

   el.style.backgroundImage = 'url(' + img + ')';
       
   return el;
}

const populateMap = () => {
  
    // add theme call
    gameState.el.className = 'game-container ' + this.theme;
  
    // make a reference to the tiles layer in the DOM.
    let tiles = this.el.querySelector('#tiles');
    
    // set up our loop to populate the grid.
    for (var y = 0; y < this.map.length; ++y) {
      for (var x = 0; x < this.map[y].length; ++x) {
        
         let tileCode = this.map[y][x];
  
          // determine tile type using code
          // index into the tileTypes array using the code.
         let tileType = this.tileTypes[tileCode];
        
         // call the helper function
         let tile = this.createEl_player(x,y,tileType,'images/tuhree.png');
         
         // add to layer
         tiles.appendChild(tile);
      }
    }
  }

const movePlayer = (event) => {
    event.preventDefault();
    if (event.keyCode < 37 || event.keyCode > 40) {
      return;
    }

    switch (event.keyCode) {
        case 37:
            moveLeft();
        break;

        case 38:       
            moveUp();
        break;

        case 39:
            moveRight();
        break;

        case 40:
            moveDown();
        break;
    }
};

const moveLeft = () => {
    // if at the boundary, return
    if (this.player.x == 0) {
        this.collide();
        return;
    }
    // itentify next tile
    let nextTile = this.map[this.player.y][this.player.x-1];
  
    // if next tile is a wall, add collide effect and return
    if (nextTile ==1) {
        this.collide();
        console.log("I should be at " + this.player.oldx + "," + this.player.oldy + " but I am at " + this.player.x + "," + this.player.y);
        str = "oopsie woopsie i made a fucky wucky";
        return;
    }
    // change coordinates of player object
    this.player.x -=1;
    // update location of DOM element
    this.updateHoriz();
};

// Game.prototype.movePlayer = function(event) {
//     event.preventDefault();

//     if (event.keyCode < 37 || event.keyCode > 40) {
//       return;
//     }

//     switch (event.keyCode) {
//         case 37:
//         console.log("Hello!")
//         this.move(3, 'WEST');
//         break;

//         case 38:       
//         this.moveUp();
//         break;

//         case 39:
//         this.moveRight();
//         break;

//         case 40:
//         this.moveDown();
//         break;
//     }
//   };

Game.prototype.move = function (units, direction) {

    for (var i = 0; i < units; i++) {
        if (direction === 'EAST') {
            Game.prototype.moveRight();
        }
        if (direction === 'WEST') {
            Game.prototype.moveLeft();
        }
        if (direction === 'NORTH') {
            Game.prototype.moveUp();
        }
        if (direction === 'SOUTH') {
            Game.prototype.moveDown();
        }
        // add edge case for incorrect direction name/dim
    }
};
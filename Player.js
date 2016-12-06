var readlineSync = require('readline-sync'); 
var Board = require(__dirname+'/Board.js');


function Player(name){
	this.nam = name;
	this.board = new Board(); 			//gen a board for the player
}

// var boardInstance = new Board();//Board._grid is created
// boardInstance.assignRandBoatLocations(boardInstance._grid);
// boardInstance.printBoard(boardInstance._grid);

module.exports = Player;

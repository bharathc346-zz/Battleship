var Player = require(__dirname+'/Player.js');
var Board = require(__dirname+'/Board.js');
var readlineSync = require('readline-sync');

var playerOneName = readlineSync.question('What is the name of Player One: ');
var playerOne = new Player(playerOneName);

var playerTwoName = readlineSync.question('What is the name of Player Two: ');
var playerTwo = new Player(playerTwoName);

var playerOneBoard = playerOne.board;
var playerOneGrid = playerOneBoard._grid;

var playerTwoBoard = playerTwo.board;
var playerTwoGrid = playerTwoBoard._grid;

playerOneBoard.assignRandBoatLocations(playerOneGrid);
console.log('\n');
playerOneBoard.printGrid(playerOneGrid);
playerTwoBoard.assignRandBoatLocations(playerTwoGrid);
console.log('\n');

var loopControl = 0;

loop:
while(loopControl===0){
	//Player One turn
	var pOneAtckCoordinate = readlineSync.question('Player One: What coordinate would you like to attack (enter x,y)? ').split(',');
	playerTwoBoard.attackCoords(pOneAtckCoordinate[0],pOneAtckCoordinate[1]);
	if(playerTwoBoard.numOfHits==16){
		console.log('Player One Wins the Game !!!!!!!!!');
		break loop;
	}
	//Player Two turn
	var pTwoAtckCoordinate = readlineSync.question('Player Two: What coordinate would you like to attack (enter x,y)? ').split(',');
	playerOneBoard.attackCoords(pTwoAtckCoordinate[0],pTwoAtckCoordinate[1]);
	if(playerOneBoard.numOfHits==16){
		console.log('Player Two Wins the Game !!!!!!!!!');
		break loop;
	}
}

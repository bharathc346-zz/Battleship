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
console.log('Player One Grid:  \n')
playerOneBoard.printGrid(playerOneGrid);
console.log('\n Player Two Grid: ')
playerTwoBoard.assignRandBoatLocations(playerTwoGrid);
playerOneBoard.printGrid(playerTwoGrid);
console.log('\n');

var loopControl = 0;
var x = 0;
var y = 0;

loop:
while(loopControl===0){
	//Player One turn
	var pOneAtckCoordinate = readlineSync.question('Player One: What coordinate would you like to attack (enter x,y)? ').split(',');
	x = parseFloat(pOneAtckCoordinate[0]);
	y = parseFloat(pOneAtckCoordinate[1]);
	playerTwoBoard.attackCoords(x,y);
	if(playerTwoBoard.numOfHits==16){
		console.log('Player One Wins the Game !!!!!!!!!');
		break loop;
	}
	console.log('Player Two Grid:  \n \n')
	playerTwoBoard.printGrid(playerTwoGrid);
	console.log('\n');

	//Player Two turn
	var pTwoAtckCoordinate = readlineSync.question('Player Two: What coordinate would you like to attack (enter x,y)? ').split(',');
	x = parseFloat(pTwoAtckCoordinate[0]);
	y = parseFloat(pTwoAtckCoordinate[1]);
	playerOneBoard.attackCoords(x,y);
	if(playerOneBoard.numOfHits==16){
		console.log('Player Two Wins the Game !!!!!!!!!');
		break loop;
	}
	console.log('Player One Grid:  \n \n')
	playerOneBoard.printGrid(playerOneGrid);
	console.log('\n');
}

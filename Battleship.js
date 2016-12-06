var Player = require(__dirname+'/Player.js');
var Board = require(__dirname+'/Board.js');

var sharath = new Player('Sharath');
var draulz = new Player('Draulz');

var sharathBoard = sharath.board;
var sharathGrid = sharathBoard._grid;
console.log('\n');
console.log('Sharath Grid: \n');
sharathBoard.assignRandBoatLocations(sharathGrid);
sharathBoard.printGrid(sharathGrid);
console.log('\n');
console.log('Draulz Grid: \n');

var draulzBoard = draulz.board;
var draulzGrid = draulzBoard._grid;

draulzBoard.assignRandBoatLocations(draulzGrid);
draulzBoard.printGrid(draulzGrid);
console.log('\n');
console.log('\n');

//Sharath attacks Draulz grid ---> pick the player who is not Rahul 
draulzBoard.attackCoords(0,1);
console.log('Draulz Grid: \n');
draulzBoard.printGrid(draulzGrid);
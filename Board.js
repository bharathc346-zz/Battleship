

function Board(){
	//Initialize 10 x 10 grid with all 0's as 0 represents water
	 this._grid = [
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','H','H','X','H','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0']
	];
};


//Assign random boat locations within a grid
// Board.prototype.assignRandBoatLocations=function(grid){
// 	var count =1;
// 	while(count<=4){										//want to gen 4 ships
// 		var row = Math.floor((Math.random()*10)+0);
// 		var column = Math.floor((Math.random()*10)+0);
// 		var direction = Math.round(Math.random());			//gen 0(horizantal) or 1(vertical)
	
// 		if(direction===0 && column+4<=10){
// 			//change if statement to be more efficent
// 			if(grid[row][column]==='0'&&grid[row][column+3]==='0'&&grid[row][column+2]==='0'&&grid[row][column+1]==='0'){
// 				var limit = column+4;
// 				for(column;column<limit;column++){
// 					grid[row][column]='X';
// 				}
// 				count++;
// 			}
// 		}

// 		else if(direction==1 && row+4<=10){
// 			//change if statement to be more efficent
// 			if(grid[row][column]==='0'&&grid[row+3][column]==='0'&&grid[row+2][column]==='0'&&grid[row+1][column]==='0'){
// 				var limit = row+4;
// 				for(row;row<limit;row++){
// 					grid[row][column]='X';
// 				}
// 				count++;
// 			}
// 		}
// 	}
// };

Board.prototype.attackCoords = function(x,y){
	if(x>9 || x<0 || y<0 ||y >9){
		console.log('Invalid Coordinates');
	}
	else if(this._grid[x][y]==='H'||this._grid[x][y]==='M'){
		console.log('You already attacked this coordinate');
	}
	else if(this._grid[x][y]==='X'){
		this._grid[x][y]='H';
		console.log('Hit')

		var up, down, left, right;
		up = down = left = right =0;
		for(var i =3;i>0;i--){
			if(this._grid[x-i][y]==='H'){
				up++;
			}
			if(this._grid[x+i][y]==='H'){
				down++;
			}
			if(this._grid[x][y-i]==='H'){
				left++;
			}
			if(this._grid[x][y+i]==='H'){
				right++;
			}
		}
		if(up+down===3){console.log('You sunk enemy ship');}
		if(right+left===3){console.log('You sunk enemy ship');}
	}
	else if(this._grid[x][y]==='0'){
		this._grid[x][y]='M';
		console.log('Miss');
	}

}


Board.prototype.printBoard= function(grid){
	for(var i =0;i<10;i++){
		var line = "";
		for(var j=0;j<10;j++){
			line = line+''+grid[i][j]+' ';
		}
		console.log(line);
	}
}



var a = new Board();
// a.assignRandBoatLocations(a._grid);
console.log('\n');
a.printBoard(a._grid);
console.log('\n');
a.attackCoords(5,5);
console.log('\n');







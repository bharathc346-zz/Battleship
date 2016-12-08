function Board(){
	//Initialize 10 x 10 grid with all 0's as 0 represents water
	 this._grid = [
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','00','00']
	];
};


//Assign random boat locations within a grid
Board.prototype.assignRandBoatLocations=function(grid){
	var count =1;
	while(count<=4){										//want to gen 4 ships
		var row = Math.floor((Math.random()*10)+0);
		var column = Math.floor((Math.random()*10)+0);
		var direction = Math.round(Math.random());			//gen 0(horizantal) or 1(vertical)
	
		if(direction===0 && column+4<=10){
			//change if statement to be more efficent
			if(grid[row][column]==='00'&&grid[row][column+3]==='00'&&grid[row][column+2]==='00'&&grid[row][column+1]==='00'){
				var limit = column+4;
				for(column;column<limit;column++){
					grid[row][column]=count+'X';
				}
				count++;
			}
		}

		else if(direction==1 && row+4<=10){
			//change if statement to be more efficent
			if(grid[row][column]==='00'&&grid[row+3][column]==='00'&&grid[row+2][column]==='00'&&grid[row+1][column]==='00'){
				var limit = row+4;
				for(row;row<limit;row++){
					grid[row][column]=count+'X';
				}
				count++;
			}
		}
	}
};

Board.prototype.attackCoords = function(x,y){
	//Check if coordinates are valid
	if(x>9 || x<0 || y<0 ||y >9){
		console.log('Invalid Coordinates');
	}
	//Check if coordinates already were attacked
	else if(this._grid[x][y].substring(1,2)==='H'||this._grid[x][y].substring(1,2)==='M'){
		console.log('You already attacked this coordinate');
	}
	//Check if coordinates hit a Ship
	else if(this._grid[x][y].substring(1,2)==='X'){
		console.log('Hit');
		this._grid[x][y]=this._grid[x][y].substring(0,1)+'H';

		//Increment up down left right
		var up, down, left, right;
		up = down = left = right =0;
		for(var i =3;i>0;i--){
			var shipNum = this._grid[x][y].substring(0,1);
			var targetText = shipNum +'H';
			if(x-i>=0){
				if(this._grid[x-i][y]===targetText){
					up++;
				}
			}
			if(x+i<=9){
				if(this._grid[x+i][y]===targetText){
					down++;
				}
			}
			if(y-i>=0){
				if(this._grid[x][y-i]===targetText){
					left++;
				}
			}
			if(y+i<=9){
				if(this._grid[x][y+i]===targetText){
					right++;
				}
			}
		}
		//Check if enemy ship was sunk 
		console.log('Left: '+left+' Right: '+right+' Up: '+up+' Down: '+down);
		if(up+down===3){console.log('You sunk enemy ship');}
		if(right+left===3){console.log('You sunk enemy ship');}
	}
	//Miss
	else if(this._grid[x][y]==='00'){
		this._grid[x][y]=this._grid[x][y].substring(0,1)+'M';
		console.log('Miss');
	}

}


Board.prototype.printGrid= function(grid){
	for(var i =0;i<10;i++){
		var line = "";
		for(var j=0;j<10;j++){
			line = line+''+grid[i][j]+' ';
		}
		console.log(line);
	}
}

module.exports = Board;


// var a = new Board();
// // a.assignRandBoatLocations(a._grid);
// console.log('\n');
// a.printGrid(a._grid);
// console.log('\n');
// a.attackCoords(0,3);
// a.attackCoords(0,4);
// a.attackCoords(0,5);
// a.attackCoords(0,6);

// console.log('\n');
// a.printGrid(a._grid);



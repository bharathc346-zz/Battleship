
function Board(){
	//Initialize 10 x 10 grid with all 0's as 0 represents water
	 this._grid = [
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0'],
		['0','0','0','0','0','0','0','0','0','0']
	];
};


//Assign random boat locations within a grid
Board.prototype.assignRandBoatLocations=function(grid){
	var count =1;
	while(count<=4){										//want to gen 4 ships
		var row = Math.floor((Math.random()*10)+0);
		var column = Math.floor((Math.random()*10)+0);
		var direction = Math.round(Math.random());			//gen 0(horizantal) or 1(vertical)
	
		if(direction==0 && column+4<=10){
			//change if statement to be more efficent
			if(grid[row][column]=='0'&&grid[row][column+3]=='0'&&grid[row][column+2]=='0'&&grid[row][column+1]=='0'){
				var limit = column+4;
				for(column;column<limit;column++){
					grid[row][column]='X';
				}
				count++;
			}
		}

		else if(direction==1 && row+4<=10){
			//change if statement to be more efficent
			if(grid[row][column]=='0'&&grid[row+3][column]=='0'&&grid[row+2][column]=='0'&&grid[row+1][column]=='0'){
				var limit = row+4;
				for(row;row<limit;row++){
					grid[row][column]='X';
				}
				count++;
			}
		}
	}
};

Board.prototype.printBoard= function(grid){
	for(var i =0;i<10;i++){
		var line = ""
		for(var j=0;j<10;j++){
			line = line+''+grid[i][j]+' ';
		}
		console.log(line);
	}
}

var a = new Board();
a.assignRandBoatLocations(a._grid);
console.log('\n');
a.printBoard(a._grid);
console.log('\n');
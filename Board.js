
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
		// console.log(row+'	'+column);
		// console.log(direction);
		// console.log(grid[row][column]);
	
		if(direction==0 && column+4<=10){
			var limit = column+4;
			for(column;column<limit;column++){
				if(grid[row][column]=='0'){
					grid[row][column] = 'X';
				}
				else{continue;}
			}
			count++;
		}

		else if(direction==1 && row+4<=10){
			var limit = row+4;
			for(row;row<limit;row++){
				if(grid[row][column]=='0'){
					grid[row][column] = 'X';
				}
				else{continue;}
			}
			count++;
		}
	}
};

var a = new Board();
a.assignRandBoatLocations(a._grid);
console.log(a._grid);
var WIDTH = 10;
var HEIGHT = 10;

var map = [];

var Cell = function(x, y) {
	var neighbors = [];
	this.initNeighbors = function () {
		if (neighbors.size > 0) {
			console.log('This cell has been initialed.')
			return;
		};
		for (var i = x-1; i <= x+1; i++) {
			if (i >= 0 && i < WIDTH) {
				for (var j = y-1; j <= j+1; j++) {
					if (j >= 0 && j < HEIGHT) {
						neighbors.push(map[i][j]);
					};
				}
			}
		}
	}
	this.status = Math.random() > 0.5? 1 : 0;
	this.nextTime = function() {
		var sum = 0;
		for (var i in neighbors) {
			if (neighbors[i].status === 1) {
				sum++;
			};
		}
		if (sum < 2 || sum > 3) {
			this.nextStatus = 0;
		} else if (sum === 3) {
			this.nextStatus = 1
		}
	}
}

var initMap = function() {
	
	for (var i in WIDTH) {
		for (var j in HEIGHT) {
			map[i][j] = new Cell(i, j);
		}
	}

	for (var i in WIDTH) {
		for (var j in HEIGHT) {
			map[i][j].initNeighbors();
		}
	}

};

var refreshStatus = function() {

	for (var i in WIDTH) {
		for (var j in HEIGHT) {
			map[i][j].nextTime();
		}
	}

	for (var i in WIDTH) {
		for (var j in HEIGHT) {
			map[i][j].status = map[i][j].nextStatus;
		}
	}
	
}






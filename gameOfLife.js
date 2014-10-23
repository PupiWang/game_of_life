var map = [];

var Cell = function(cellObj) {
  var x = cellObj.x;
  var y = cellObj.y;
  var HEIGHT = cellObj.height;
  var WIDTH = cellObj.width;
	var neighbors = [];
	this.initNeighbors = function () {
		if (neighbors.size > 0) {
			console.log('This cell has been initialed.');
			return;
		}
		for (var i = x-1; i <= x+1; i++) {
			if (i >= 0 && i < WIDTH) {
				for (var j = y-1; j <= j+1; j++) {
					if (j >= 0 && j < HEIGHT) {
            if (i !== x || j !== y) {
              neighbors.push(map[i][j]);
            }
					}
				}
			}
		}
	};
	this.status = cellObj.status;
	this.nextTime = function() {
		var sum = 0;
		for (var i in neighbors) {
			if (neighbors[i].status === 1) {
				sum++;
			}
		}
		if (sum < 2 || sum > 3) {
			this.nextStatus = 0;
		} else if (sum === 3) {
			this.nextStatus = 1
		}
	}
};

exports.Game = function (array) {
  var height = array.length;
  var width = array[0].length;
  this.height = height;
  this.width = width;
  var arrForPrint = array;
  var initMap = function() {
    var i, j;
    for (i = 0; i < height; i++) {
      map[i] = [];
      for (j = 0; j < width; j++) {
        map[i].push(new Cell({
          x: i,
          y: j,
          height: height,
          width: width,
          status: array[i][j]
        }));
        //console.log('cell:' + i + ', ' + j);
      }
    }

    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        map[i][j].initNeighbors();
      }
    }

    //console.log(map);

  };

  initMap();

  this.printMap = function (array) {
    console.log('====================Map Begin====================');
    for (var i = 0; i < height; i++) {
      console.log(array[i]);
    }
    console.log('==================== Map End ====================');
  };

  this.next_state = function () {
    arrForPrint = [];
    var cell, i, j;
    for (i = 0; i < height; i++) {
      arrForPrint[i] = [];
      for (j = 0; j < width; j++) {
        cell = map[i][j];
        cell.nextTime();
        arrForPrint[i].push(cell.nextStatus);
      }
    }
    this.printMap(arrForPrint);
    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        map[i][j].status = map[i][j].nextStatus;
      }
    }
    return arrForPrint;
  };

  // this.printMap(arrForPrint);
};






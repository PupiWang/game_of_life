var should = require('should');
var gameOfLife = require('./gameOfLife');

describe('Game', function() {
  describe('One cell', function() {
    it('only one cell shoul be 1*1', function() {
      var game = new gameOfLife.Game([[0]]);
      game.width.should.equal(1);
      game.height.should.equal(1);
    }); 
    
    // it('Dead cell should be dead', function() {
    //   var game = new gameOfLife.Game([[0]]);
    //   game.next_state().should.eql([[0]]);
    // });
  });
});
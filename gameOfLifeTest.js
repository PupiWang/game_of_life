var should = require('should');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    })
  })
})

describe('Game', function(){
  describe('One cell', function(){
    it('Dead cell should be dead', function(){
      game = Game.new([0][0])
      game.next_state.should.equal([0][0])
    })      
  })    
} )

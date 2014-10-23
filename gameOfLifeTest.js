var should = require('should');

describe('Game', function(){
  describe('One cell', function(){
    it('Dead cell should be dead', function(){
      game = Game.new([[0]])
      game.next_state.should.equal([0])
    })      
  })    
} )

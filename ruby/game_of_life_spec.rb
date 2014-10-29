require 'rspec'
require_relative 'game_of_life'

describe 'Game' do 

  context 'One Cell' do

    it 'One dead cell should be dead' do
      game = Game.new [[0]]
      expect(game.next_state).to eq([[0]])
    end

    it 'One alive cell still be dead' do
      game = Game.new [[1]]
      expect(game.next_state).to eq([[0]])
    end

 end 

  context 'Two Cell' do

    it 'two dead cells should be dead' do
      game = Game.new [[0],[0]]
      expect(game.next_state).to eq([[0],[0]])
    end

    it 'two alive cells should be dead' do
      game = Game.new [[1],[1]]
      expect(game.next_state).to eq([[0],[0]])
    end
	
	it 'one alive cell still be dead' do
      game = Game.new [[0],[1]]
      expect(game.next_state).to eq([[0],[0]])
    end
  end


  context 'Three Cells' do

   it 'Three dead cells should be dead' do
      game = Game.new [[0],[0],[0]]
      expect(game.next_state).to eq([[0],[0],[0]])
    end

    it 'Three alive cells should be [[1],[1],[1]]' do
      game = Game.new [[1],[1],[1]]
      expect(game.next_state).to eq([[0],[1],[0]])
    end




  
  end
end

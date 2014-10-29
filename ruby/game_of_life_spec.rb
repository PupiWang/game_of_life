require 'rspec'
require_relative 'game_of_life'

def assert_grid(init_grid, expected_grid)
	game = Game.new init_grid
	expect(game.next_state).to eq(expected_grid) 
end

describe 'Game' do 

  context 'One Cell' do

    it 'One dead cell should be dead' do
      assert_grid [[0]], [[0]]
    end

    it 'One alive cell still be dead' do
      assert_grid [[1]], [[0]]
    end

 end 

  context 'Two Cell' do

    it 'two dead cells should be dead' do
      assert_grid [[0],[0]],
     			  [[0],[0]]
    end

    it 'two alive cells should be dead' do
	  assert_grid [[0],[0]],
     			  [[0],[0]]
    end
	
	it 'one alive cell still be dead' do
      assert_grid [[0],[0]],
     			  [[0],[0]]
	end
  end


  context 'Three Cells' do

   it 'Three dead cells should be dead' do
	   assert_grid [[0],[0],[0]],
		   		   [[0],[0],[0]]
    end

    it 'Three alive cells should be [[1],[1],[1]]' do
		assert_grid [[1],[1],[1]],
				    [[0],[1],[0]]
    end

	it 'Two alive cells should be dead' do
		assert_grid [[0],[1],[1]],
				    [[0],[0],[0]]
		assert_grid [[1],[0],[1]],
					[[0],[0],[0]]
    end
  end
end

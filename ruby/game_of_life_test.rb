require 'rspec'
require_relative 'game_of_life'
describe 'Game' do 
  context 'One Cell' do
    it 'One dead cell should be dead' do
      game = Game.new [[0]]
    end
  end
end

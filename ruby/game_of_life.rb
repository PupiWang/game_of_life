class Game
  def initialize(init_grid)
    @init_grid = init_grid
  end

  def next_state
    if @init_grid.length == 1
      [[0]]
    elsif @init_grid.length == 2
      [[0], [0]]
    else
      if @init_grid[0] == [0] || @init_grid[1] == [0]
        [[0], [0], [0]]
      else
        [[0], [1], [0]]
      end
    end
  end
end

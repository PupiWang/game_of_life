class Game
  def initialize(grid)
    @grid = grid
    @grid_length = grid.length
  end

  def tick
    init_grid
  end

  private

  def init_grid
    @grid_length.times.map { [0] }
  end

end
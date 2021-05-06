# Each cell in the sudoku can be represented as a dictionary where there is the
# value column/row numbers and list of possible values
# A grid is a 9x9 matrx of cells
# Each cell has a value {None or 0-9 if possible_numbers !None}, row, column, and list of possible_numbers {1-9 or Blank if value !None}
class cell:
    def __init__(self, row, column, box):
        self.row = row
        self.column = column
        self.box = box
        self.possible_numbers=list(range(1,10))

class grid:
    def __init__(self, problem_state):
        self.cells = self.create_cells()
        self.cells = self.populate_cells(problem_state)
# This method creates kind of a copy of the problem state to do the solving with, a data structure for the sudoku to be  solved within
    def create_cells(self):
        cells_for_grid = [[],[],[],[],[],[],[],[],[]]
        for i in cells_for_grid:
            for j in range(1,10):
                i.append([])
                i[j] = {'value': 0, 'row': i, 'column': j, 'possible': [k for k in range(1,10)]}
# What I imagine the the problem state will be is a list of  81 numbers that
# indicate 0 if the cell is blank or the populating number otherwise
    def populate_cells(self, problem_state):
        for i in problem_state:
            if i is not 0:
                self.cells[i//9][i%9]['value'] = i


# For every-function from now on, if the function does not change the state of the grid, continue, if it does start from the return to the journey's start point if you reach the end of the journey you cant solve the
# THIS IS THE JOURNEY'S START POINT
def solve_sudoku(grid):
    solved = False
    while not solved:
        state_change = False
        # Now for every number in the box
        for i in grid:
            for j in i:
                # If its value isn't 0
                if grid[i][j]['value'] is not 0:
                    grid[i][j]['possible'] = None
                    box_num = grid[i][j]['box']
                    state_change = True
                    # For every cell that shares its row, column, or box_number take the cells value away from the list of possible numbers
                    for k in grid:
                        for l in k:
                            if grid[k][l]['row'] == i and grid[i][j]['value'] in grid[k][l]['possible']:
                                grid[k][l]['possible'].remove(grid[i][j]['value'])
                            elif grid[k][l]['column'] == j and grid[i][j]['value'] in grid[k][l]['possible']:
                                grid[k][l]['possible'].remove(grid[i][j]['value'])
                            elif grid[k][l]['box'] == box_num and grid[i][j]['value'] in grid[k][l]['possible']:
                                grid[k][l]['possible'].remove(grid[i][j]['value'])
                # Now for every cell in the grid that's possible numbers length is 1
                if len(grid[i][j]['possible']) == 1:
                    state_change = True
                    grid[i][j]['value'] == grid['i']['j']['possible'][0]
        # Now for every cell who's possible_numbers contains a number that is in no other possible_numbers of a cell in that row, column, or box change the lists value to None, and eliminate the possible_numbers list, if this has changed the state of the grid, go abkc to the journey's start point, if not continue
        if not state_change:
            solved = True


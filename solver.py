# First take an input row by row or as a csv

# Process that input as the number it holds or a _ if its blank

# Create a list of dictionaries to represent the grid of cells
# a grid is a 9x9 matrx of cells
# Each cell has a value {None or 0-9 if possible_numbers !None}, row, column, box_number, and list of possible_numbers {1-9 or Blank if value !None} [#COULDI do away with the need to have a box number?]
class cell:
    def __init__(self, row, column, box):
        self.row = row
        self.column = column
        self.box = box
        self.possible_numbers=list(range(1,10))

class grid:
    def __init__(self):
        self.cells = self.create_cells()
    
    def create_cells(self):
        cells_for_grid = [[],[],[],[],[],[],[],[],[],[],[]]
        for i in cells_for_grid:
            for j in range(1,10):
                

# For every-function from now on, if the function does not change the state of the grid, continue, if it does start from the return to the journey's start point

# THIS IS THE JOURNEY'S START POINT

# Now for every number in the box that isn't blank turn its possible_numbers to None
# For every cell that shares its row, column, or box_number take the cells value away from the list of possible numbers

# Now for every cell in the grid that's possible numbers length is 1 take the value of the number in that list and make that number the value of the cell, if this has changed the state of the grid, go abkc to the journey's start point, if not continue

# Now for every cell who's possible_numbers contains a number that is in no other possible_numbers of a cell in that row, column, or box change the lists value to None, and eliminate the possible_numbers list, if this has changed the state of the grid, go abkc to the journey's start point, if not continue



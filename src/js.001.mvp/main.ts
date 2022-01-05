// Create a Cell Class That will store all
export class cell {
  value: number;
  row: number;
  column: number;
  squareRow: number;
  squareColumn: number;
  possible: number[];

  constructor(
    value: number = null,
    row: number,
    column: number,
    squareRow: number,
    squareColumn: number
  ) {
    this.value = value;
    this.row = row;
    this.column = column;
    this.squareRow = squareRow;
    this.squareColumn = squareColumn;
    this.possible = value === null ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : null;
  }
}

export class grid {
  private cells: Array<Array<cell>>;

  constructor(startingState: Array<Array<number>>) {
    let cells: Array<Array<cell>>;
    for (var _i = 1; _i < 10; _i++) {
      cells.push(new Array<cell>());
      for (var _j = 1; _j < 10; _j++) {
        let row = _i % 3 == 0 ? 3 : _i % 3;
        let column = _j % 3 == 0 ? 3 : _j % 3;
        let cellValue =
          startingState[_i][_j] == 0 ? null : startingState[_i][_j];
        cells[_i].push(new cell(cellValue, row, column, row, column));
      }
    }
    this.cells = cells;
  }

  getState(): Array<Array<cell>> {
    return this.cells;
  }

  cleanPencilMarks(): void {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        // Get the cells coordinates and the remaining possible values
        let coordinates: Array<number> = [
          cell.row,
          cell.column,
          cell.squareRow,
          cell.squareColumn,
        ];
        // Get the rows and columns where the cell could be affected
        let notPossibleNumbers: Array<number> = [];
        this.cells.forEach((checkRow) => {
          checkRow.forEach((checkCell) => {
            let checkCellCoords: Array<number> = [
              checkCell.row,
              checkCell.column,
              checkCell.squareRow,
              checkCell.squareColumn,
            ];
            if (checkCell.value != null) {
              if (checkCellCoords[3] == coordinates[3]) {
                if (checkCellCoords[2] == coordinates[2]) {
                  notPossibleNumbers.push(checkCell.value);
                } else if (checkCellCoords[1] == coordinates[1]) {
                  notPossibleNumbers.push(checkCell.value);
                }
              } else if (
                checkCellCoords[2] == coordinates[2] &&
                checkCellCoords[0] == coordinates[0]
              ) {
                notPossibleNumbers.push(checkCell.value);
              }
            }
          });
        });
        cell.possible = cell.possible.filter(
          (value) => !notPossibleNumbers.includes(value)
        );
      });
    });
  }
}

export class Solver {
  // Solve any lone singles that are sitting about in the mix
  loneSingles(grid: Array<Array<cell>>): Array<Array<cell>> {
    grid.forEach((gridRow) => {
      gridRow.forEach((cell) => {
        if (cell.possible.length == 1) {
          cell.value = cell.possible[0];
          cell.possible = null;
        }
      });
    });
    return grid;
  }

  hiddenSingles(grid: Array<Array<cell>>): Array<Array<cell>> {
    return grid;
  }
}

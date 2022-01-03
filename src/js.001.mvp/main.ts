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
  cells: Array<Array<cell>>;

  constructor(startingState: Array<Array<number>>) {
    let cells: Array<Array<cell>>;
    for (var _i = 1; _i < 10; _i++) {
      cells.push(new Array<cell>());
      for (var _j = 1; _j < 10; _j++) {
        let row = _i % 3 == 0 ? 3 : _i % 3;
        let column = _j % 3 == 0 ? 3 : _j % 3;
        let cellValue = startingState[_i][_j] == 0 ? null : startingState[_i][_j]
        cells[_i].push(new cell(cellValue, row, column, row, column));
      }
    }
    this.cells = cells;
  }
}

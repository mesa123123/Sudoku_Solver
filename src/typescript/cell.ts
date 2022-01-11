// Create a Cell Class That will store all
export class cell {
  value: number;
  row: number;
  column: number;
  squareRow: number;
  squareColumn: number;
  possible: number[];

  constructor(
    value: number = 0,
    row: number,
    column: number,
    squareRow: number,
    squareColumn: number
  ) {
    if (
      [row, column, squareRow, squareColumn].some((num) => num < 1 || num > 3)
    ) {
      throw new RangeError(`Sudoku is 3x3 you can't create a cell with more columns than that!`);
    }
    this.value = value === 0 ? null : value;
    this.row = row;
    this.column = column;
    this.squareRow = squareRow;
    this.squareColumn = squareColumn;
    this.possible = value === 0 ? [...Array(10).keys()].slice(1) : null;
  }

  getCoordinates(): Array<number> {
    // Get the cells coordinates and the remaining possible values
    let coordinates: Array<number> = [
      this.row,
      this.column,
      this.squareRow,
      this.squareColumn,
    ];
    return coordinates;
  }
}


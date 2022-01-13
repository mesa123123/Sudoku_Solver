// Create a Cell Class That will store all
export class cell {
  value: number;
  row: number;
  column: number;
  square: number;
  possible: number[];

  constructor(value: number = 0, row: number, column: number) {
    if ([row, column].some((num) => num < 1 || num > 9)) {
      throw new RangeError(
        `Sudoku is 3x3 you can't create a cell with more columns than that!`
      );
    }
    this.value = value === 0 ? 0 : value;
    this.row = row;
    this.column = column;
    // I Really Couldn't be bothered with the if elses so this will have to do!
    this.square =
      row > 3
        ? row > 6
          ? column > 3
            ? column > 6
              ? 9
              : 8
            : 7
          : column > 3
          ? column > 6
            ? 6
            : 5
          : 4
        : column > 3
        ? column > 6
          ? 3
          : 2
        : 1;
    this.possible = value === 0 ? Array.from(Array(10).keys()).slice(1) : null;
  }

  getCoordinates(): Array<number> {
    // Get the cells coordinates and the remaining possible values
    let coordinates: Array<number> = [this.row, this.column, this.square];
    return coordinates;
  }
}

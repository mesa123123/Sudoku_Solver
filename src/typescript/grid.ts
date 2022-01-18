import { cell } from "./cell";

export class grid {
  cells: Array<Array<cell>>;

  constructor(startingState: Array<Array<number>>) {
    // This should make sure only the right kinds of arrays are being dealt to the class and we don't muck around making shitty sudokus
    let startingStateStatus: string = "";
    if (startingState.length != 9) {
      startingStateStatus = startingStateStatus + "The startingState does not have exactly 9 rows, please make sure this is the case. ";
    }
    startingState.some((row) => {
      if (row.length != 9)
        startingStateStatus = startingStateStatus + "Not all rows in the starting state have exactly 9 members, please make sure this is the case ";
    });
    if (startingStateStatus != "") {
      throw new Error(startingStateStatus);
    }
    let cells: Array<Array<cell>> = new Array<Array<cell>>();
    for (var i = 0; i < 9; i++) {
      cells.push(new Array<cell>());
      for (var j = 0; j < 9; j++) {
        let row: number = i + 1;
        let column: number = j + 1;
        // As we go through the loops check if the number is within the range 1-9 if its not throw an error
        if (startingState[i][j] > 9 || startingState[i][j] < 0) {
          throw new Error(
            "The number entered for row " +
              row +
              ", column " +
              column +
              " is not within the range 1-9, this is required for the puzzle"
          );
        }
        let cellValue: number =
          startingState[i][j] == 0 ? 0 : startingState[i][j];
        cells[i].push(new cell(cellValue, row, column));
      }
    }
    this.cells = cells;
  }

  getState(): Array<Array<cell>> {
    return this.cells;
  }
  // Get the cells that share a row column or square with a particular cell this is referred to as a 'house'
  getHouses(
    cellCoordinates: Array<number>,
    grid: Array<Array<cell>>
  ): Array<Array<cell>> {
    let houseCells: cell[][];
    houseCells[0] = grid.flat().filter((checkCell) => {
      return checkCell.getCoordinates()[0] == cellCoordinates[0];
    });
    houseCells[1] = grid.flat().filter((checkCell) => {
      return checkCell.getCoordinates()[1] == cellCoordinates[1];
    });
    houseCells[2] = grid.flat().filter((checkCell) => {
      return checkCell.getCoordinates()[2] == cellCoordinates[2];
    });
    return houseCells;
  }
}

import { cell } from "./cell";

export class grid {
  cells: Array<Array<cell>>;

  constructor(startingState: Array<Array<number>>) {
    let cells: Array<Array<cell>>;
    for (var _i = 1; _i < 10; _i++) {
      cells.push(new Array<cell>());
      for (var _j = 1; _j < 10; _j++) {
        let row: number = _i;
        let column: number = _j;
        let cellValue: number =
          startingState[_i][_j] == 0 ? 0 : startingState[_i][_j];
        cells[_i].push(new cell(cellValue, row, column));
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
  // Should this be in the solver class??? I feel like there are going to be too many side effects by keeping it in here...
  cleanPencilMarks(): void {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        // Get the rows and columns where the cell could be affected, filter them out so only those with values remain
        let dependentCellsWithValue: Array<cell> = this.getHouses(
          cell.getCoordinates(),
          this.cells
        )
          .flat()
          .filter((cell) => cell.value != null);
        let notPossibleNumbers: Array<number> = dependentCellsWithValue.map(
          (cell) => {
            return cell.value;
          }
        );
        cell.possible = cell.possible.filter(
          (value) => !notPossibleNumbers.includes(value)
        );
      });
    });
  }
}

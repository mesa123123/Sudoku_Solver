import { cell } from "./cell"

export class grid {
  cells: Array<Array<cell>>;

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
  // Get the cells that share a row column or square with a particular cell this is referred to as a 'house'
  getHouses(
    cellCoordinates: Array<number>,
    grid: Array<Array<cell>>
  ): Array<Array<cell>> {
    let dependentCells: cell[][];
    grid.flat().forEach((checkCell) => {
      let checkCellCoordinates = checkCell.getCoordinates();
      if (checkCellCoordinates[3] == cellCoordinates[3]) {
        if (checkCellCoordinates[2] == cellCoordinates[2]) {
          // Immediate Square
          dependentCells[0].push(checkCell);
        } else if (checkCellCoordinates[1] == cellCoordinates[1]) {
          // Column
          dependentCells[2].push(checkCell);
        }
      } else if (
        checkCellCoordinates[2] == cellCoordinates[2] &&
        checkCellCoordinates[0] == cellCoordinates[0]
      ) {
        // Row
        dependentCells[1].push(checkCell);
      }
    });
    return dependentCells;
  }

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


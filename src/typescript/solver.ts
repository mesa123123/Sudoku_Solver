import { cell } from "./cell"
import { grid } from "./grid"

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
  // Solve any hidden singles that are about in the grid
  hiddenSingles(grid: grid): Array<Array<cell>> {
    grid.cells.forEach((gridRow) => {
      gridRow.forEach((cell) => {
        let cellsHouses: Array<Array<cell>> = grid.getHouses(
          cell.getCoordinates(),
          grid.cells
        );
        cellsHouses.forEach((house) => {
          let continuing = true; 
          if (continuing) {
            let remaining = cell.possible;
            house.forEach((houseCell) => {
              remaining = remaining.filter(
                (item) => houseCell.possible.indexOf(item) < 0
              );
            });
            if (remaining.length === 1) {
              cell.value = remaining[0];
              cell.possible = null
              continuing = false
            }
          }
        });
      });
    });
    return grid.cells;
  }
}

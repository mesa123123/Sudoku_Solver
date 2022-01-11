import { cell } from "./cell";
import { grid } from "./grid";

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
              cell.possible = null;
              continuing = false;
            }
          }
        });
      });
    });
    return grid.cells;
  }

  // Finding hidden n > 1s is going to be tricky, basically we have a cell with n possible numbers and we need to find out if those possible numbers are occuring as a group
  getHouseFrequency(house: Array<cell>): Map<number, number> {
    //Create a Map that will get frequencies of all of the cells
    let cellFrequencies: Map<number, number> = new Map<number, number>();
    for (let i = 1; i < 10; i++) {
      cellFrequencies[i] = 0;
    }
    // Now cycle through the house and see what possible numbers are still in play
    // And increment in the frequency table for each value that turns up
    house.forEach((cell) => {
      cell.possible.forEach((p) => {
        cellFrequencies[p] = cellFrequencies[p]++;
      });
    });
    return cellFrequencies;
  }
 
  //Need an algorithm to find out if the n numbers in a houseFrequencyChart, are occuring in n number of cells, I'll call this a grouping of cells
  checkForCellGrouping(frequencyChart: Map<number, number>, house: Array<cell>): void {
    return null
  }


}

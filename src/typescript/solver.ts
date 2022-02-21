import { cell } from "./cell";
import { grid } from "./grid";

export class Solver {
  // Remove all unnecessary pencil marks from all houses, this is quite computationally expensive if we do this after every change, could we just do this to the houses affected by the changed cell? @todo
  cleanPencilMarks(grid: grid): grid {
    grid.cells.forEach((row) => {
      row.forEach((cell) => {
        // Get the rows and columns where the cell could be affected, filter them out so only those with values remain
        let dependentCellsWithValue: Array<cell> = grid
          .getHouses(cell.getCoordinates(), grid.cells)
          .flat()
          .filter((cell) => cell.value != 0);
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
    return grid;
  }

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

  // This function returns a table of which cells in the house (arbitrarily numbered 1-9) each pencil mark occurs within e.g. a pencil mark of 1 occurs in the following cells relative to the house
  getReversePossibilities(house: Array<cell>): Map<number, Array<number>> {
    //Create a Map that will get frequencies of all of the cells
    let reversePossibilities: Map<number, Array<number>> = new Map<
      number,
      Array<number>
    >();
    // Each key has a number between 1 and 9 given its position in the house (this is arbitrary but ordering them helps the algorithm)
    for (let i: number = 1; i < 10; i++) {
      reversePossibilities[i] = new Array<number>();
    }
    // Add that cell number (relative to the house) to the array for each value that turns up
    let cellNumber = 0;
    house.forEach((cell) => {
      cellNumber = cellNumber++;
      cell.possible.forEach((p) => {
        reversePossibilities[p].push(cellNumber);
      });
    });
    return reversePossibilities;
  }

  //Not Sure if I need this...
  getFrequencyTable(house: Array<cell>): Map<number, number> {
    let frequencyTable: Map<number, number> = new Map<number, number>();
    return frequencyTable;
  }

  // I've called a fof where the number of frequencys with a certain frequency is the same (equalfofs) or higher (greaterfofs) than the frequency.
  findFOf(frequencyTable: Array<number>): Array<Array<number>> {
    // Create a double barrelled array of numbers (an array of arrays with length two, double barrelled just sounds better)
    let fofs: Array<Array<number>> = new Array<Array<number>>();
    // Loop through all the possible frequencys that are the fofs we could be looking for (there is no need to investigate ones because that would be a lone single)
    for (let i: number = 2; i < 10; i++) {
      // Keep count of the number of times a frequency pops up
      let frequencyCount: number = 0;
      // Loop through the various frequencies in the frequency table and take note if it is the length were looking for
      frequencyTable.forEach(f => {
        if (f == i) {
          frequencyCount++;
        }
      });
      // if its the same its an equalfof so push it to the first barrel
      if (frequencyCount == i) {
        fofs[0].push(i);
      } else if (frequencyCount > i) {
        // if the frequency count is greater push it to the second barrel
        fofs[1].push(i);
      }
    }
    // return the greaterfofs and equalfofs in a double barrelled array
    return fofs;
  }

  //Need an algorithm to find out if the n numbers in a houseFrequencyChart, are occuring in the same n number of cells, I'll call this a grouping of cells
  checkForCellGrouping(house: Array<cell>): void {
    // get a reversePosibilites table for the house, this table tells us for each type of pencil mark in which cells (relative to the house) does that pencil mark occur?
    let reversePossibilities = this.getReversePossibilities(house);
    // get a frequency table for the number of times a certain pencil mark appears this will just be the length of the respective arrays in the reversePossibilities table, this is represented as an array where the relative pencil mark type is array member +1
    let frequencies: Array<number> = Array.from(
      reversePossibilities.values(),
      (p) => p.length
    );
    let fofs: Array<Array<number>> = this.findFOf(frequencies);
    // isolate the true and greaterfofs into diferent variables
    // A greaterfof will have a harder time find a grouping, because combinatorics, so only deal with it if there are no equalfofs
    if (fofs[0].length != 0) {
      
    }
    // each equalfof will point to a number of cells that a pencil mark exists within (i.e. the length of its reversePossibilities entry), thus if there the equalfofs match, e.g. the reversePossibilities of 2 twos or the 3 twos, are the same table then we can call that a grouping
  }
}

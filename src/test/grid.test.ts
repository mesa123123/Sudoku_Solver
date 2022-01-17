import { grid } from "../typescript/grid";
import * as testData from "./gridTestData";

describe("Testing Constructor Function Positive Path", () => {
  let validGrid: grid;
  beforeEach(() => {
    validGrid = new grid(testData.validArray);
  });
  it("should produce a grid object given a 9x9 2D Array of Numbers that contains the numbers 1-9", () => {
    expect(validGrid.constructor.name).toBe(grid.name);
  });
  it("should have the numbers 0-9 populated in each of its cells values", () => {
    let outOfRangeCells = validGrid.cells.flat().filter((cell) => {
      cell.value < 0 || cell.value > 9;
    });
    expect(outOfRangeCells.length).toBe(0);
  });
  it("should have the  numbers populated in the right places", () => {
    let cellValueArray = new Array<number>();
    validGrid.cells.flat().forEach((cell) => {
      cellValueArray.push(cell.value);
    });
    expect(cellValueArray).toStrictEqual(testData.validArray.flat());
  });
});

describe("Testing Constructor Function Negative Paths", () => {
  it.each<Array<Array<Array<number>>>>([
    [testData.longLengthArray],
    [testData.shortLengthArray],
  ])(
    "should not produce a grid object if the 2D Array of Numbers does not have the length 9x9",
    (data) => {
      expect(() => {
        return new grid(data);
      }).toThrowError(testData.rowCountErrorMessage);
    }
  );
  it.each<Array<Array<Array<number>>>>([
    [testData.longRowArray],
    [testData.shortRowArray],
  ])(
    "should not produce a grid object if the 2D array of Numbers has any row length that is not 9",
    (data) => {
      expect(() => {
        return new grid(data);
      }).toThrowError(testData.memberCountErrorMessage);
    }
  );
  it("should produce an error highlighting both row length and array length when the starting state has deficiencies in data", () => {})
  it("should not insert any number that isn't between 1-9 and should produce a range error", () => {});
  it("should not allow a starting state with more than one copy of any number between 1-9 in a single house to construct and should return an error", () => {});
});

describe("Testing getState Method", () => {
  it("should return a 9x9 array of cells", () => {});
  it("given a grid object, unchanged from instantation, it should return the 9x9 array of cells that fits the statring state that was called into the class", () => {});
});

describe("Testing getHouses Function", () => {
  it("The houses for a given cell coordinate should all have nine members", () => {});
  it("The first house in the returned array should have the same grid number", () => {});
  it("The second house in the returned array should have the same column number", () => {});
  it("The third house in the returned array should have the same row number", () => {});
});

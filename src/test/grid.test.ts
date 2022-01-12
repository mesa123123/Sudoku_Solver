import { grid } from "../typescript/grid";
import { cell } from "../typescript/cell";

describe("Testing Constructor Function", () => {
  it("should produce a grid object given a 9x9 2D Array of Numbers that contains the numbers 1-9", () => {});
  it("should not produce a grid object if the 2D Array of Numbers does not have the length 9x9", () => {});
  it("should insert the correct starting state numbers in the correct cells", () => {});
  it("should not insert any number that isn't between 1-9 and should produce a range error", () => {});
  it("should not allow a starting state with more than one copy of any number between 1-9 to be act as the starting state", () => {  })
});

describe("Testing getState Method", () => {
  it("should return a 9x9 array of cells", () => {});
});

describe("Testing getHouses Function", () => {
  it("The houses for a given cell coordinate should all have nine members", () => {  })
  it("The first house in the returned array should have the same grid number", () => {  })
  it("The second house in the returned array should have the same column number", () => {  })
  it("The third house in the returned array should have the same row number", () => {  })
});

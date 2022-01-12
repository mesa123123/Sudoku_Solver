import { cell } from "../typescript/cell";

var randint = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min;
};

var randouter = (min: number, max: number) => {
  return Math.random() >= 0.5
    ? Math.floor(Math.random() * Number.MAX_SAFE_INTEGER - max) + max
    : Math.floor(Math.random() * min);
};

describe("Cell Row and Column Location Tests", () => {
  it("Any number between 1 and 3 for the row, column, squareRow and squareColummn properties should not return an error and create the object", () => {
    let testCell = new cell(
      0,
      randint(1, 9),
      randint(1, 9),
    );
    expect(
      [
        testCell.row,
        testCell.column,
      ].filter((item) => item < 1 || item > 9).length
    ).toBe(0);
  });

  it("Any number above three or below one should not be used to instantiate a cell object", () => {
    expect(() => {
      new cell(
        0,
        randouter(1, 9),
        randouter(1, 9),
      )
    }).toThrow(RangeError(`Sudoku is 3x3 you can't create a cell with more columns than that!`));
  });

  it("Negative numbers in any coordinate should not be used to instantiate a cell object", () => {
    expect(() => {
      new cell(
        0,
        randint(1, 9) * -1,
        randint(1, 9) * -1,
      );
    }).toThrow(RangeError(`Sudoku is 3x3 you can't create a cell with more columns than that!`));
  });
});

describe("Cell Object Testing Possible Values", () => {
  it("Possible values should be 1 to 9 when creating a cell that has no value", () => {
    let testCell = new cell(0, 1, 3);
    expect(testCell.possible).toStrictEqual([...Array(10).keys()].slice(1));
  });

  it("If cell is made with a value there should be no possible array", () => {
    let testCell = new cell(3, 1, 3);
    expect(testCell.possible).toBe(null);
  });
});

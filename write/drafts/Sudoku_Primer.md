# A Quick Primer on Sudoku and the Pencil Method

Sudoku is a puzzle where you have a 3 by 3 grid of squares, that are each broken down into a 3 by 3 set of cells.
The person completing the puzzle (henceforth known as the puzzler) can insert one number between 1-9 in each cell.
To complete the puzzle one must enter the numbers 1-9 so that it meets these criteria:

* Each 3x3 Square must contain the numbers 1-9
* Each row must contain the numbers 1-9
* Each column must contain the numbers 1-9
* [No cell must contain more than one number][FN1]
* [Each number must go in a cell][FN1]

Given these rules and the size of the grid, no number can be used more than once in a row, column, or square.
At the start of the game you are given a certain number of squares already filled in and you must fill the grid in from there

[//]: Widget ./sudokuwidget.html?animate=start

## The Pencil Mark Method

Because you can't use a number more than once, each cell is constrained by what values have already been placed. In other words each cell is dependent on the cells in every column, row, and 3x3 grid they are a part of.

[//]: Widget ./sudokuwidget.html?animate=dependencies

For instance, if there is a three in same row as a cell and a four within the same column, you can neither place a four nor a three in that cell.
Obviously only the most adept sudoku player among us can keep track of all 81 cells and eliminate from the nine possibilities that occur in all of them. The solution to our limited brain capacity and the way of keeping track of them on the puzzle grid has been referred to as [pencil marks][Ref1].

Their general process works like this:

* For each cell write the numbers 1-9 in a smaller font within the cell

[//]: Widget ./sudokuwidget.html?animate=pencilmarks

* Now for each cell, check along the row, column and, grid to see if there are any already placed numbers
* Erase those numbers from the current cell

[//]: Widget ./sudokuwidget.html?animate=pencilmarkserase

* You are left with the possibilities that this cell can now take
* Then repeat this process for every cell on the grid

---
[//]: Footnotes
[FN1]: "These rules should seem obvious to those who are experienced with the puzzle but I want to drive the point home because this would be the exact thing I'd think of to challenge the rules and score an easy win"
[//]: References
[Ref1]: https://www.learn-sudoku.com/pencil-marks.html

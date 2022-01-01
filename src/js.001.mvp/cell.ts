export class cell {
    value: number;
    row: number;
    column: number;
    square: number;
    possible: number[];

    constructor(value: number, row: number, column: number, square: number, possible: number[]) {
        this.value = value
        this.row = row
        this.column = column
        this.square  = square
        this.possible = possible 
    }
};


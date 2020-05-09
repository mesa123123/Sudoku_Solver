import numpy as np
quizzes = np.zeros((1000000, 81), np.int32)
solutions = np.zeros((1000000, 81), np.int32)
csv_data=enumerate(open('./data/sudoku.csv', 'r').read().splitlines()[1:])
#  puzzles is a list of tuples that take the order (problem, solution) for
#  testing purposes.
puzzles = []
for i, line in csv_data:
    quiz, solution = line.split(",")
    puzzles.append((quiz, solution))


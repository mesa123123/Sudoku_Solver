# Road Map

## Requirements List

1. Blog Post (*)

   1. Subtask - Introduction (/)
   2. Subtask - Structure of the Game (/)
      1. SVG Widget (/)
      2. Writings (/)
      3. SVG Animations (*)
   3. Subtask - Discussing of common solving techniques (*)
   4. Subtask - Data Structures (*)
   5. Subtask - GUI Display (*)
   6. Subtask - Limitations to the Solving Technique, and where to go from here (*)

2. Solver Programme (d)
   1. Game Object (t)
      1. Subtask - solve method (d)
         - Perhaps make each type of solve method one function within the game object
            - Naked/Hidden Singles (t)
            - Naked/Hidden Groups (d)
            - Omission (*)
      2. Subtask - game state (t)
          - set (t) - this is completed in the constructor
          - get (t)
   2. Cell Object (/)
      1. Subtask - current value (/)
      2. Subtask - possible values (/)

### Scope Creep

1. Make Little HTML Applets for describing what I'm talking about:
   1. Sudoku Primer (/) - MVP complete
2. There has to be a better way than just writing all this damn code with heaps of forEach Loops, look up currying please!

### Further Ideas

- svg learnings with css - how I made the sudoku widget and the interface
  - Changing css properties based on related parent classes
- a way to insert js widgets into blog posts written in markdown
  - A way to insert them with variables called within the markdown?
- Is the best way to query elements in a document child -> or parent to child in this context?
- What is the best way to read from an object while iterating through that same object and changing its state as you do so?
- What's the best way to structure a sudoku board so that it works faster in memory, 2d or 1d array?

## Document Details

### Outline

This document outlines the requirements and their status to keep track of the project, the requirements status will follow a model as follows:

1. Todo - requirements will sit in this state by default - This is denoted by (*)
2. Doing - which will be broken down into the following steps (This will be denoted by the word DOING):
   Analysis - we don't know what the feature will need so we're figuring that out (a) _note this is usually not required because the analysis should be done here_
   Development - feature is being created (d)
   Testing - feature has been created and is being checked for functionality (t)
3. Done - feature has been completed and functional - This is denoted by (/) - This is denoted by (/)

### Requirement type

Each requirement below the second level (e.g. 1 -> a -> _3rd Level_) will have a type:

- Sub-Task - (this is a piece of a requirement that whose completion is considered the most atomic piece of work)
- Bug - (this is a piece of a requirement where earlier development work didn't work out right therefore something needs to be fixed)
  - Bugs are notated as an indented version of a subtask, they contain two sentences, a brief bug description and what needs to be done to fix it (in theory)

# Mocha Testing Tic-Tac-Toe

Simple tic-tac-toe game to learn Mocha.js. This app is **in development**.

## Current Progress
* Game logic is complete
* All functions pass unit testing
* Intial UI work

## Roadmap
* Complete UI (chocolate bars for X's and coffee beans for O's...because this was an exercise to learn ***Mocha*** :laughing: )
* Functions to handle communication with user
    * Player turn
    * Player victory
    * Tied game
    * Invalid move
* Function to restart game after game end

## Getting Started

Getting started with this tic-tac-toe game is easy! Just clone the repo...

```
git clone https://github.com/cplank/ticTacToe.git 
```
...and install dependencies:
* React
* Mocha.js

Additionally, this project uses React-Bootstrap for styling.

```
cd [Repository-Directory]
npm install 
```

## Running tests
First, ensure module.exports is **not** commented out at the end of logic.js

Each function in this tic-tac-toe game has a unit test associated with it. I used Mocha.js, first without any UI, then later adapted to work with React.

To run the tests:
>npm test

### Test breakdown

This tic-tac-toe game is broken into (at this time) **six** basic functions.

makeColumns returns the gameboard's columns

```
describe('makeColumns', function () {
    let x = 'x';
    let o = "o";
    let scenario = [[o, x, o], [o, x, o], [o, x, o]];
    it('gets the middle column', function () {
        let midcol = logic.makeColumns(scenario, 1)
        assert.deepEqual(midcol, [x, x, x])
    });
```

getDiagonal1 and getDiagonal2 returns each diagonal of the gameboard

```
describe('getDiagonal1', function () {
    let x = 'x';
    let o = "o";
    let gameboard = [[o, x, o], [o, x, o], [o, x, o]];
    it('gets top left to bottom right diagonal', function () {
        let diagonal = logic.getDiagonal1(gameboard)
        console.log("wtf", diagonal)
        assert.deepEqual(diagonal, [o, x, o])
    })
});
```
checkLine returns **true** if there are three tokens in any 'line' (column, row, or diagonal)

```
describe('checkLine', function () {
    let x = 'x';
    let o = "o";
    let gameboard = [[o, o, o], [o, x, o], [o, x, o]];
    it('confirms top row is all o\'s', function () {
        let topRow = logic.checkLine(gameboard[0], o)
        console.log("wtf LINES", topRow)
        assert.deepEqual(topRow, true)
    })
```
checkWin runs checkLine on each line in the game

```
describe('checkWin', function () {
    let x = 'x';
    let o = "o";
    it("returns true becuase the top row has three O's", function () {
        let gameBoard = [[o, o, o], [o, x, o], [o, x, o]];
        let checkWin = logic.checkWin(gameBoard, o)
        assert.deepEqual(checkWin, true)
    })
```
playerMove alters the gameboard

```
describe('playerMove', function () {
    let x = "x"
    let o = "o"
    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    this.beforeEach(function () {
        gameBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    })

    it("mutates gameBoard so [1][1] equals x instead of 0", function () {
        let expectedGameBoard = [[0, 0, 0], [0, x, 0], [0, 0, 0]]
        assert.deepEqual(logic.playerMove(gameBoard, x, 1, 1), expectedGameBoard)
    })
```

## Built With

* [React](https://reactjs.org/docs/create-a-new-react-app.html) - The web framework used
* [Node Package Manager](https://www.npmjs.com/) - Dependency Management
* [Mocha](https://mochajs.org/) - Testing framework

## Authors

**Carrie Plank** 

Enthusiastic developer with a background in fundraising and communications. Currently building user-friendly websites, custom API integrations, and database consulting for nonprofits, startups, and small businesses.

## Lessons learned
This was my first attempt at test driven development! Mocha was easy to pick up but I found reframing my thinking towards TDD a bit more challenging. It was a great exercise to think about the tests first - what are they testing, what are the expected outcomes - and write the functions in accordance. Like many things on the first go, I didn't quite nail it (which is why there are outstanding functions in the roadmap section), but I definitely learned a lot that I'll be able to apply to future projects.

Honestly, by far the most challenging part of this little project was figuring out how to deploy my React app to GitHub pages! I eventually admitted defeat and deployed to Heroku. 

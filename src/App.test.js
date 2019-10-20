import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as logic from './logic'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// const logic = require('/logic');
var assert = require('assert');


describe('makeColumns', function () {
  let x = 'x';
  let o = "o";
  let scenario = [[o, x, o], [o, x, o], [o, x, o]];
  it('gets the middle column', function () {
    let midcol = logic.makeColumns(scenario, 1)
    assert.deepEqual(midcol, [x, x, x])
  });
  it('gets the first column', function () {
    let midcol = logic.makeColumns(scenario, 0)
    assert.deepEqual(midcol, [o, o, o])
  });
  it('gets the third column', function () {
    let midcol = logic.makeColumns(scenario, 2)
    assert.deepEqual(midcol, [o, o, o])
  });
  it('three indexes!?', function () {
    let midcol = logic.makeColumns(scenario, 3)
    assert.deepEqual(midcol, [undefined, undefined, undefined])
  });
});

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

describe('getDiagonal2', function () {
  let x = 'x';
  let o = "o";
  let gameboard = [[o, x, o], [o, x, o], [o, x, o]];
  it('gets bottom left to top right diagonal', function () {
    let diagonal2 = logic.getDiagonal2(gameboard)
    console.log("wtf 2", diagonal2)
    assert.deepEqual(diagonal2, [o, x, o])
  })
});

describe('checkLine', function () {
  let x = 'x';
  let o = "o";
  let gameboard = [[o, o, o], [o, x, o], [o, x, o]];
  it('confirms top row is all o\'s', function () {
    let topRow = logic.checkLine(gameboard[0], o)
    console.log("wtf LINES", topRow)
    assert.deepEqual(topRow, true)
  })
  it("returns false because middle row doens't have a o win", function () {
    let topRow = logic.checkLine(gameboard[1], o)
    console.log("wtf LINES", topRow)
    assert.deepEqual(topRow, false)
  })
});

describe('checkWin', function () {
  let x = 'x';
  let o = "o";
  it("returns true becuase the top row has three O's", function () {
    let gameBoard = [[o, o, o], [o, x, o], [o, x, o]];
    let checkWin = logic.checkWin(gameBoard, o)
    assert.deepEqual(checkWin, true)
  })
  it("returns true becuase the middle col has three X's", function () {
    let gameBoard = [[o, x, o], [o, x, o], [o, x, o]];
    let checkWin = logic.checkWin(gameBoard, x)
    assert.deepEqual(checkWin, true)
  })
  it("returns true becuase the left diag has three X's", function () {
    let gameBoard = [[x, x, o], [o, x, o], [o, o, x]];
    let checkWin = logic.checkWin(gameBoard, x)
    assert.deepEqual(checkWin, true)
  })
  it("returns true becuase the lower diag has three O's", function () {
    let gameBoard = [[o, o, x], [x, o, x], [o, x, o]];
    let checkWin = logic.checkWin(gameBoard, o)
    assert.deepEqual(checkWin, true)
  })
  it("returns FALSE there is no winner", function () {
    let gameBoard = [[0, o, x], [0, o, x], [o, 0, o]];
    let checkWin = logic.checkWin(gameBoard, o) && logic.checkWin(gameBoard, x)
    assert.deepEqual(checkWin, false)
  })

})

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
  it("mutates gameBoard so [2][2] equals o instead of 0", function () {
    let expectedGameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, o]]
    assert.deepEqual(logic.playerMove(gameBoard, o, 2, 2), expectedGameBoard)
  })
})


const logic = require('../logic');
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
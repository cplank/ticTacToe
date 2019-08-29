//Making the game board. Zeroes denote an empty space.

let gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function checkLine(line, token) {
    let tokenCounter = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === token) {
            tokenCounter++
        }
        if (tokenCounter === 3) {
            return true
        }
    }
    return false
}

function makeColumns(gameBoard, col) {
    return [gameBoard[0][col], gameBoard[1][col], gameBoard[2][col]]

}

function getDiagonal1(gameBoard) {
    return [gameBoard[0, 0], gameBoard[1, 1], gameBoard[2, 2]]
}

function getDiagonal2(gameBoard) {
    return (gameBoard[0, 2], gameBoard[1, 1], gameBoard[2, 0])
}

function checkWin(gameBoard, line, token, col) {

}


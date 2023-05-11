const boardSize:number = 8;

const makeChessBoard = (): string[][] => {
    const chessboard: string[][] = [];

    for (let i = 0; i < boardSize; i++) {
        chessboard[i] = [];
        for (let j = 0; j < boardSize; j++) {
            if ((i + j) % 2 === 0) {
                chessboard[i][j] = "  ";
            } else {
                chessboard[i][j] = "██";
            }
        }
    }

    return chessboard;
};

const printBoard = (board: string[][]): void => {
    for (let i = 0; i < boardSize; i++) {
        let row = "";
        for (let j = 0; j < boardSize; j++) {
            row += board[i][j];
        }
        console.log(row);
    }
};

const board = makeChessBoard();
printBoard(board);
const FIRST_PLAYER = 'x'; // создаем играков
const SECOND_PLAYER = 'o';
const NEXT_PLAYER = {
    [FIRST_PLAYER]: SECOND_PLAYER,
    [SECOND_PLAYER]: FIRST_PLAYER,
};

class TicTacToe {
    constructor() {

    }

    gameField = [ // создаем матрицу игрового поля
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    
    currentPlayer = FIRST_PLAYER; // создаем текущего игрока равного первому игроку

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] != null){
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = NEXT_PLAYER[this.currentPlayer];
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        const winnerByRow = this.gameField.map(row => row.every(p => p)) //
                                            .findIndex(p => p);
        if (winnerByRow >= 0) return this.gameField[winnerByRow][0];

        const winnerByCol = this.gameField.map((_, index) => this.gameField
                                            .map(col => col.every(p => p))) //
                                            .findIndex(p => p);
        if (winnerByCol >= 0) return this.gameField[0][winnerByCol];

        const winnerByCrossA = this.gameField.map((row, index) => row[index]) //
                                                .every((p, i, arr) => p === p); //
        if (winnerByCrossA) return this.gameField[0][0];

        const winnerByCrossB = this.gameField.map((row, index) => row[2]) //
                                                .every((p, i, arr) => p === p); //
        if (winnerByCrossB) return this.gameField[0][2];
        
        return null;
    }

    noMoreTurns() {
        return this.gameField.every(row => row.every(col => col));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
        //return this.gameField[rowIndex][colIndex] ? this.gameField[rowIndex] : this.gameField[colIndex];//
    }
}

module.exports = TicTacToe;

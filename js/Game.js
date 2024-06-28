export default class Game {
    constructor(){
        this.board = Array(9).fill(null);
        this.isGameOver = false;
    }

    resetGame(){
        this.board = Array(9).fill(null);
        this.isGameOver = false;
    }

    checkWin(){
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return true;
            }
        }
        return false;
    }

    drawGame() {
        return this.board.every(cell => cell !== null);
    }

    gameOver(){
        return this.isGameOver;
    }

    checkCellClick(cell, simble){
        let erro = false;
        if(this.board[cell] === null){
            this.board[cell] = simble;
            this.isGameOver = this.checkWin();
            return !erro
        }
        else{
            alert("This cell is checked");
            return erro
        }
    }
}

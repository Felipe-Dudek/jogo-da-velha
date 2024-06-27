export default class Game {
    constructor(){
        this.board = Array(9).fill(null);
        this.isGameOver = false;
    }

    resetGame(){
        this.board = Array(9).fill(null);
        this.isGameOver = false;
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

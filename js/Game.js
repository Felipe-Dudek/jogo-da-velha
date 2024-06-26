export default class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.board = Array(9).fill(null);
    }

    clickCell(cell){
        alert(`clickou na célula ${cell}`)
    }
}

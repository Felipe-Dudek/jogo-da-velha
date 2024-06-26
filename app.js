import Player from './js/Player.js';
import Game from './js/Game.js';
import UI from './js/UI.js';

function startGame(){
    const player1Name = document.getElementById('player1');
    const player2Name = document.getElementById('player2');
    
    ui.clearDOM();

    player1 = new Player(player1Name.value, 'X');
    player2 = new Player(player2Name.value, 'O');
    game = new Game(player1, player2);

    ui.startGame(player1.score, player2.score, player1.playerName);
}

function cellCLick(id){
    game.clickCell(id);
    ui.addSimble(id);
}

let player1;
let player2;
let game;
const ui = new UI();

ui.initialScreen();

window.startGame = startGame;
window.cellCLick = cellCLick;

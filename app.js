import Player from './js/Player.js';
import Game from './js/Game.js';
import UI from './js/UI.js';

function startGame(){
    const player1Name = document.getElementById('player1');
    const player2Name = document.getElementById('player2');

    ui.clearDOM();

    player1 = new Player(player1Name.value, 'X');
    player2 = new Player(player2Name.value, 'O');
    game = new Game();

    continueGame();
}

function continueGame(){
    game.resetGame();
    player1.timeToPlay = false;
    player2.timeToPlay = false;
    ui.clearDOM();
    ui.startGame();
    if(Math.random() <= 0.5){
        player1.timeToPlay = true;
    }
    else{
        player2.timeToPlay = true;
    }
    ui.changePlayer(player1.timeToPlay ? player1.playerName : player2.playerName);
    ui.changeScore(player1.score, player2.score, player1.playerName, player2.playerName);
}

let player1;
let player2;
let game;
const ui = new UI();

ui.initialScreen();

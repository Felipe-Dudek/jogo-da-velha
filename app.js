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
    ui.changeScore(player1.win, player2.win, player1.playerName, player2.playerName);
}

function cellClick(id){
    const erroCellChecked = game.checkCellClick(id, player1.timeToPlay ? player1.simble : player2.simble);
    if(erroCellChecked){
        if(game.gameOver()){
            ui.winGame(player1.timeToPlay ? player1.playerName : player2.playerName);
            if(player1.timeToPlay){
                player1.win++;
                player2.lose++;
                saveLocalStorage(player1, 'w');
                saveLocalStorage(player2, 'l');
            }else{
                player2.win++;
                player1.lose++;
                saveLocalStorage(player2, 'w');
                saveLocalStorage(player1, 'l');
            }
        } else {
            if(game.drawGame()){
                ui.winGame("Tied");
                player1.Tie++;
                player2.Tie++;
                saveLocalStorage(player1, 't');
                saveLocalStorage(player2, 't');
            }
        }
        
        player1.timeToPlay = !player1.timeToPlay;
        player2.timeToPlay = !player2.timeToPlay;
        ui.changePlayer(player1.timeToPlay ? player1.playerName : player2.playerName);
        ui.changeScore(player1.win, player2.win, player1.playerName, player2.playerName);
        ui.addSimble(id, player1.timeToPlay ? player1.simble : player2.simble);   
    }
}

function saveLocalStorage(playerSave, typeScore){
    const localData = localStorage.getItem('players');
    if (localData === null) {
        const players = [{ name: playerSave.playerName, win: playerSave.win, tie: playerSave.tie, lose: playerSave.lose}];
        localStorage.setItem('players', JSON.stringify(players));
    } else {
        const players = JSON.parse(localData);
        let playerFound = false;
        players.forEach(player => {
            if (player.name === playerSave.playerName) {
                if(typeScore === 'w'){
                    player.win++;
                }
                else if(typeScore === 't'){
                    player.tie++;
                } 
                else if(typeScore === 'l'){
                    player.lose++;
                }
                playerFound = true;
            }
        });
        if (!playerFound) {
            players.push({ name: playerSave.playerName, win: playerSave.win, tie: playerSave.tie, lose: playerSave.lose});
        }
        localStorage.setItem('players', JSON.stringify(players));
    }
}

function getLocalStorage(){
    const localData = localStorage.getItem('players');
    if(localData === null){
        ui.sideMenu(null);
    } else {
        const players = JSON.parse(localData);
        ui.sideMenu(players);
    }
}

let player1;
let player2;
let game;
const ui = new UI();

ui.initialScreen();

window.startGame = startGame;
window.cellCLick = cellClick;
window.continueGame = continueGame;
window.getLocalStorage = getLocalStorage;

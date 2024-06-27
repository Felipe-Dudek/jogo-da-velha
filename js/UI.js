export default class UI {
    constructor() {
        this.idDiv = document.getElementById('main');
    }

    clearDOM(){
        this.idDiv.innerHTML = "";
    }

    initialScreen(){
        const screenText = document.createElement('h1');

        screenText.textContent = 'START';
        screenText.classList = 'display-flex justify-center align-center start-button';
        screenText.addEventListener('click', () => {
            this.clearDOM();
            this.mainContent();
        });

        this.idDiv.appendChild(screenText);
    }

    mainContent(){
        const mainContentHeader = document.createElement('div');
        mainContentHeader.classList.add('main-content-header', 'display-flex', 'justify-between', 'align-center');

        const sideMenuButtonContainer = document.createElement('div');
        sideMenuButtonContainer.classList.add('main-side-menu-button', 'margin-left');
        sideMenuButtonContainer.addEventListener('click',  () => {
            this.sideMenu();
        });

        for (let i = 0; i < 3; i++) {
            const sideMenuButton = document.createElement('div');
            sideMenuButton.classList.add('side-menu-button');
            sideMenuButtonContainer.appendChild(sideMenuButton);
        }

        mainContentHeader.appendChild(sideMenuButtonContainer);

        const marginRightDiv = document.createElement('div');
        marginRightDiv.classList.add('margin-right');

        const newGameButton = document.createElement('button');
        newGameButton.classList.add('new-game-button');
        newGameButton.type = 'button';
        newGameButton.textContent = 'New Game';
        newGameButton.addEventListener('click', () => {
            this.popupPlayerName();
        });
        marginRightDiv.appendChild(newGameButton);

        mainContentHeader.appendChild(marginRightDiv);

        const mainGameContent = document.createElement('div');
        mainGameContent.classList.add('main-game-content', 'display-flex', 'justify-center', 'align-center');

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('grid-container');

        for (let i = 1; i <= 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `id${i.toString()}`;
            gridContainer.appendChild(cell);
        }

        mainGameContent.appendChild(gridContainer);

        this.idDiv.appendChild(mainContentHeader);
        this.idDiv.appendChild(mainGameContent);
    }

sideMenu(playersList){
        const sideMenu = document.createElement('div');
        sideMenu.classList.add('side-menu');

        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.classList.add('display-flex', 'justify-end', 'margin-right');

        const closeButton = document.createElement('a');
        closeButton.addEventListener('click', () => {
            this.clearDOM();
            this.mainContent();
        });
        closeButton.textContent = 'X';

        closeButtonContainer.appendChild(closeButton);
        sideMenu.appendChild(closeButtonContainer);

        this.idDiv.appendChild(sideMenu);

        const overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        overlay.classList.add('overlay');

        this.idDiv.appendChild(overlay);
    }

    popupPlayerName(){
        const popupNewGame = document.createElement('div');
        popupNewGame.classList.add('popup-new-game');

        const closeContainer = document.createElement('div');
        closeContainer.classList.add('close', 'display-flex', 'justify-end', 'margin-top');

        const closeButton = document.createElement('a');
        closeButton.href = "#";
        closeButton.classList.add('margin-right');
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => {
            this.clearDOM();
            this.mainContent();
        });

        closeContainer.appendChild(closeButton);

        popupNewGame.appendChild(closeContainer);

        const mainPopup = document.createElement('div');
        mainPopup.classList.add('main-popup', 'display-flex', 'justify-center');

        const player1Container = document.createElement('div');
        player1Container.classList.add('display-flex', 'flex-column', 'margin-right', 'margin-left');

        const labelPlayer1 = document.createElement('label');
        labelPlayer1.setAttribute('for', 'player1');
        labelPlayer1.textContent = 'Player 1';

        const inputPlayer1 = document.createElement('input');
        inputPlayer1.setAttribute('type', 'text');
        inputPlayer1.setAttribute('id', 'player1');
        inputPlayer1.setAttribute('placeholder', 'Player Name...');

        player1Container.appendChild(labelPlayer1);
        player1Container.appendChild(inputPlayer1);

        const player2Container = document.createElement('div');
        player2Container.classList.add('display-flex', 'flex-column', 'margin-right', 'margin-left');

        const labelPlayer2 = document.createElement('label');
        labelPlayer2.setAttribute('for', 'player2');
        labelPlayer2.textContent = 'Player 2';

        const inputPlayer2 = document.createElement('input');
        inputPlayer2.setAttribute('type', 'text');
        inputPlayer2.setAttribute('id', 'player2');
        inputPlayer2.setAttribute('placeholder', 'Player Name...');

        player2Container.appendChild(labelPlayer2);
        player2Container.appendChild(inputPlayer2);

        mainPopup.appendChild(player1Container);
        mainPopup.appendChild(player2Container);

        popupNewGame.appendChild(mainPopup);

        const startContainer = document.createElement('div');
        startContainer.classList.add('start', 'display-flex', 'justify-center', 'margin-right', 'margin-top');

        const startButton = document.createElement('button');
        startButton.classList.add('start-game-button');
        startButton.textContent = 'Start';
        startButton.setAttribute('id', 'start-button');
        startButton.setAttribute('onclick', 'startGame()');

        startContainer.appendChild(startButton);

        popupNewGame.appendChild(startContainer);

        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.classList.add('overlay');

        this.idDiv.appendChild(popupNewGame);
        this.idDiv.appendChild(overlay);
    }

    startGame(scorePlayer1, scorePlayer2, playerName) {

        const mainContentHeader = document.createElement('div');
        mainContentHeader.classList.add('main-content-header', 'display-flex', 'justify-between', 'align-center');

        const divHidden = document.createElement('div');
        divHidden.classList.add('main-side-menu-button', 'margin-left');

        mainContentHeader.appendChild(divHidden);

        const scoreContainer = document.createElement('div');
        const scoreText = document.createElement('h2');
        scoreText.textContent = `${scorePlayer1} X ${scorePlayer2}`;
        scoreContainer.appendChild(scoreText);

        mainContentHeader.appendChild(scoreContainer);

        const cancelGameButtonContainer = document.createElement('div');
        cancelGameButtonContainer.classList.add('margin-right');

        const cancelGameButton = document.createElement('button');
        cancelGameButton.classList.add('new-game-button');
        cancelGameButton.setAttribute('type', 'button');
        cancelGameButton.addEventListener('click', () => {
            this.popupPlayerName();
            this.startClick();
        });
        cancelGameButton.textContent = 'Cancel Game';

        cancelGameButtonContainer.appendChild(cancelGameButton);
        mainContentHeader.appendChild(cancelGameButtonContainer);

        this.idDiv.appendChild(mainContentHeader);

        const mainGameContent = document.createElement('div');
        mainGameContent.classList.add('main-game-content', 'display-flex', 'justify-center', 'align-center', 'margin-top');

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('grid-container');

        for (let i = 1; i <= 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `id${i}`);
            cell.setAttribute('onclick', `cellCLick(${i})`)
            gridContainer.appendChild(cell);
        }

        mainGameContent.appendChild(gridContainer);
        this.idDiv.appendChild(mainGameContent);

        const footer = document.createElement('div');
        footer.classList.add('display-flex', 'justify-center', 'align-center');

        const footerText = document.createElement('h2');
        footerText.textContent = `${playerName}`;
        footer.appendChild(footerText);

        this.idDiv.appendChild(footer);
    }

     winGame(winPlayer){
        const playAgain = document.createElement('div');
        playAgain.classList.add('popup-new-game');

        const mainPopup = document.createElement('div');
        mainPopup.classList.add('win-text', 'display-flex', 'justify-center');

        const playerContainer = document.createElement('div');
        playerContainer.classList.add('display-flex', 'margin-right', 'margin-left');

        const textWin = document.createElement('h3');
        if(winPlayer === "Tied"){
            textWin.innerText = `${winPlayer}`;
        }else{
            textWin.innerText = `${winPlayer} Win`;
        }
        
        playerContainer.appendChild(textWin);

        mainPopup.appendChild(playerContainer);

        playAgain.appendChild(mainPopup);

        const PlayContainer = document.createElement('div');
        PlayContainer.classList.add('start', 'display-flex', 'justify-between', 'margin-right', 'margin-top');

        const closeButton = document.createElement('button');
        closeButton.classList.add('start-game-button', 'margin-left');
        closeButton.textContent = 'Stop';
        closeButton.setAttribute('id', 'start-button');
        closeButton.addEventListener('click', () => {
            this.clearDOM();
            this.mainContent();
        });

        const PlayButton = document.createElement('button');
        PlayButton.classList.add('start-game-button', 'margin-right');
        PlayButton.textContent = 'Play Again';
        PlayButton.setAttribute('id', 'start-button');
        PlayButton.setAttribute('onclick', 'continueGame()');

        PlayContainer.appendChild(closeButton);
        PlayContainer.appendChild(PlayButton);

        playAgain.appendChild(PlayContainer);

        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.classList.add('overlay');

        this.idDiv.appendChild(playAgain);
        this.idDiv.appendChild(overlay);
    }

    addSimble(id){
        const simble = document.getElementById(`id${id}`);

        const content = document.createElement('a');
        content.innerText = id;

        simble.appendChild(content);
    }
}

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

        const listPlayers = document.createElement('div');
        listPlayers.classList.add('display-flex', 'justify-start', 'margin-left');

        const list = document.createElement('ul');

        playersList.forEach(players => {
            const listAux = document.createElement('li');
            listAux.innerText = `Score: ${players.score} - ${players.name}`
            list.appendChild(listAux);
        });

        listPlayers.appendChild(list);

        sideMenu.appendChild(listPlayers);

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
}

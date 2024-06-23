export default class UI {
    constructor() {
        this.idDiv = document.getElementById("main");
    }

    clearDOM(){
        this.idDiv.innerHTML = "";
    }

    initialScreen(){
        const screenText = document.createElement('h1');

        screenText.textContent = "START";
        screenText.classList = "display-flex justify-center align-center start-button";
        screenText.addEventListener('click', () => {
            this.clearDOM();
            this.mainContent();
        });

        this.idDiv.appendChild(screenText);
    }

    mainContent(){
        alert("hello");
    }

    sideMenu(){
        alert("side manu open");
    }
}
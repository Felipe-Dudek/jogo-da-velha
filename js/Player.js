export default class Player {
    constructor(playerName, simble){
        this.playerName = playerName;
        this.simble = simble;
        this.win = 0;
        this.tie = 0;
        this.lose = 0;
        this.timeToPlay = false;
    }
}

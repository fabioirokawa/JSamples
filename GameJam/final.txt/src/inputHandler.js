class InputHandler{

    constructor(game){
        this.game = game;

        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
              case 38:
                if(game.gameState == GAMESTATE.RUNNING)
                this.game.currentLevel.actionMenu.previousOption();
                break;
              case 40:
                if(game.gameState == GAMESTATE.RUNNING)
                    this.game.currentLevel.actionMenu.nextOption();
                break;
              case 13:
                if(game.gameState == GAMESTATE.RUNNING)
                    this.game.currentLevel.roundSystem.actionSelected = true;
                break;
              case 27:
                game.togglePause();
                break;
              default:
                break;
            }
        });
    }

    

}
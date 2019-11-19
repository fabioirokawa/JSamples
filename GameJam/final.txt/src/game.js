const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    ENDGAME: 4
};

class Game{

    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.currentLevelIndex = 0;
    }

    start(){

        this.gameState = GAMESTATE.RUNNING;

        new InputHandler(this);
        

        this.char = new Char(this);
        
        this.currentLevel = new Level(this.char, this, this.currentLevelIndex);

    }

    update(deltaTime){

        if(this.gameState != GAMESTATE.RUNNING) return;

        this.currentLevel.update(deltaTime);

        if(this.currentLevel.levelEnded){
            this.currentLevelIndex++;
            this.resetChar();
            this.currentLevel = new Level(this.char, this, this.currentLevelIndex);
        }

    }

    draw(ctx){

        this.currentLevel.draw(ctx);
        

        if(this.gameState == GAMESTATE.PAUSED){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.75)";
            ctx.fill();

            ctx.font = "72px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Pause", this.gameWidth/2, this.gameHeight/2);
        }

        if(this.gameState == GAMESTATE.ENDGAME){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.75)";
            ctx.fill();

            ctx.font = "72px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Fim do Jogo", this.gameWidth/2, this.gameHeight/2);
        }

        if(this.gameState == GAMESTATE.GAMEOVER){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.75)";
            ctx.fill();

            ctx.font = "72px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Você Perdeu", this.gameWidth/2, this.gameHeight/2);
        }

    }

    resetChar(){
        this.char.life = this.char.maxlife;
        this.char.armor = 0;
    }

    togglePause(){
        if(this.gameState == GAMESTATE.PAUSED) this.gameState = GAMESTATE.RUNNING;
        else this.gameState = GAMESTATE.PAUSED
    }

    
}
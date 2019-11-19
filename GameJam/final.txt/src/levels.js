class Level{

    constructor(char, game, level){
        this.game = game;

        this.char = char;
        this.mob = this.loadLevel(level);

        this.charLife = new Lifebar(this.game.gameWidth/2 - 125, this.game.gameHeight - 50, 250, 20, "#000", "#f0f", "#f00", 3, this.char);
        this.mobLife = new Lifebar(this.game.gameWidth/2 - 125, 30, 250, 20, "#000", "#00f", "#f00", 3, this.mob);

        this.lifebars = [this.charLife, this.mobLife];

        this.actionMenu = new ActionMenu(this.game);

        this.roundSystem = new RoundSystem(this.char, this.mob, this.actionMenu);

        this.levelEnded = false;
    }

    update(deltaTime){

        if(this.mob == -1){
            game.gameState = GAMESTATE.ENDGAME;
            return;
        }

        this.char.update(deltaTime);
        this.mob.update(deltaTime);

        this.lifebars.forEach(bar => { bar.update(deltaTime);});
        

        if(this.charLife.health <= 0){
            //Char Dead
            this.game.gameState = GAMESTATE.GAMEOVER;

            return;

        }else if(this.mobLife.health <= 0){
            //Mob Dead
            this.levelEnded = true;
            //this.game.gameState = GAMESTATE.MENU;
            return;

        }

        this.actionMenu.update(deltaTime);

        this.roundSystem.update(deltaTime);

    }

    draw(ctx){
        if(this.mob == -1) return;


        this.char.draw(ctx);
        this.mob.draw(ctx);

        this.lifebars.forEach(bar => {bar.draw(ctx);});

        this.actionMenu.draw(ctx);
    }

    loadLevel(level){
        if(mobs[level] == undefined) return -1;
        else {
            var mob = new Mob(mobs[level].life, mobs[level].minAP, mobs[level].maxAP,
                mobs[level].minMP, mobs[level].maxMP, mobs[level].width,
                mobs[level].height, this.game);
            return mob;
        }
    }

}

const mob1 = {
    life: 100,
    minAP:  3,
    maxAP:  5,
    minMP:  7,
    maxMP:  9,
    width: 50,
    height:50
}

const mob2 = {
    life: 200,
    minAP:  5,
    maxAP:  7,
    minMP:  9,
    maxMP: 12,
    width: 50,
    height:100
}

const mobs = [mob1, mob2];
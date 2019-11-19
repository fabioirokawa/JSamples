class ActionMenu{

    constructor(game){

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight
        this.width = 100;
        this.height = 120;
        this.game = game;

        this.enabled = false;

        this.currentHover = 0;
        this.potentialSelection = 0;

        this.position = {
            x: this.game.char.position.x - this.width - 10,
            y: this.game.char.position.y - this.height - 10
        }

    }

    draw(ctx) {

        if(!this.enabled) return;

        //Border
        ctx.fillStyle = "#000";
        ctx.fillRect(this.position.x - 5, this.position.y - 5, this.width + 10 ,this.height + 10);
        
        //Fill
        ctx.fillStyle = "#0a0";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        //Lines
        ctx.fillStyle = "#000";
        ctx.fillRect(this.position.x, this.position.y + 12 + 14 + 10, this.width, 5);

        ctx.fillStyle = "#000";
        ctx.fillRect(this.position.x, this.position.y + 60 + 10 + 10, this.width, 5);


        this.drawOptions(ctx);
    }

    update(deltaTime) {
        //do something on update
        this.potentialSelection = this.currentHover;
        
    }

    drawOptions(ctx){
        var posx = this.position.x + this.width/2;
        var posy = this.position.y + 12 + 21;

        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";

        if(this.potentialSelection == 0) ctx.fillStyle = "black";
        else ctx.fillStyle = "white";
        ctx.fillText("ATK", posx, posy -10);

        if(this.potentialSelection == 1) ctx.fillStyle = "black";
        else ctx.fillStyle = "white";
        ctx.fillText("DEF", posx, posy + 33);

        if(this.potentialSelection == 2) ctx.fillStyle = "black";
        else ctx.fillStyle = "white";
        ctx.fillText("MAG", posx, posy +66 + 10);
    }

    nextOption(){
        if(!this.enabled) return;

        this.currentHover++;
        if(this.currentHover > 2) this.currentHover = 0;
    }

    previousOption(){
        if(!this.enabled) return;

        this.currentHover--;
        if(this.currentHover < 0) this.currentHover = 2;
    }

    getAction(){
        return this.potentialSelection;
    }

    enable(){
        this.enabled = true;
    }

    disable(){
        this.enabled = false;
        this.currentHover = 0;
        this.potentialSelection = 0;
    }

}
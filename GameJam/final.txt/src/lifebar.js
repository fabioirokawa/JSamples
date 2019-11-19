class Lifebar{
    constructor(pX, pY, width, height, backColor, color, shieldColor, bordersize, char){
        this.char = char;
        this.backColor = backColor;
        this.color = color;
        this.shieldColor = shieldColor;
        this.pX = pX;
        this.pY = pY;
        this.width = width;
        this.height = height;
        this.bordersize = bordersize;

        this.health = char.life;
        this.maxHealth = char.maxlife;
        this.shield = char.armor;

        this.position = {
            x: pX,
            y: pY
        }
    }

    update(deltaTime){
        this.health = this.char.life;
        if(this.health < 0) this.health = 0;
        this.shield = this.char.armor;

    }

    draw(ctx){

        var percent = this.health/this.maxHealth;
        var shieldPercent = this.shield/this.maxHealth;

        ctx.fillStyle = this.backColor;
        ctx.fillRect(this.position.x-this.bordersize, this.position.y-this.bordersize, this.width +this.bordersize*2, this.height + this.bordersize*2);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width*percent, this.height);

        ctx.fillStyle = this.shieldColor;
        ctx.fillRect(this.position.x, this.position.y, this.width*shieldPercent, this.height);
    }
}
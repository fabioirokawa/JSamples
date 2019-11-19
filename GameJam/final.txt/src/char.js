class Char{

    constructor(game){

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight
        this.width = 50;
        this.height = 50;

        this.position = {
            x: this.gameWidth / 4 - this.width,
            y: this.gameHeight - this.gameHeight/3 - this.height
        }

        this.attackSpeed = 0;
        this.maxAttackSpeed = 10;

        this.maxlife = 100;
        this.life = this.maxlife;

        this.maxarmor = this.maxlife;
        this.armor = 0;

        this.minAttackPower = 10;
        this.maxAttackPower = 50;

        this.minMagicPower = 15;
        this.maxMagicPower = 25;

    }

    draw(ctx) {
        ctx.fillStyle = "#0ff";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    

    update(deltaTime) {
        this.position.x += this.attackSpeed;
        if(this.position.x > 525) this.position.x = 525;
        else if(this.position.x < this.gameWidth / 4 - this.width) this.position.x = this.gameWidth / 4 - this.width;
    }

    attack(mob){
        this.attackSpeed = this.maxAttackSpeed;

        setTimeout(() => {
            this.attackSpeed = -this.maxAttackSpeed;
        }, 1500);

        setTimeout(() => {
            this.attackSpeed = 0;

            mob.takeDamage(this.maxAttackPower/*Math.floor(Math.random() * (this.maxAttackPower - this.minAttackPower)) + this.minAttackPower*/);
        }, 3000);

        return 3200;

    }

    block(){
        this.armor += 5;
        if(this.armor >= this.maxarmor) this.armor = this.maxarmor;
        return 700;
    }

    special(mob){
        mob.takeDamage(this.maxMagicPower/*Math.floor(Math.random() * (this.maxMagicPower - this.minMagicPower)) + this.minMagicPower*/);
        return 1500;
    }

    takeDamage(amount){
        var damage = amount - this.armor;
        if(damage <= 0){
            this.armor -= amount;
        }
        else if(damage > 0){
            this.armor = 0;
            this.life -= damage;
        }
    }

}
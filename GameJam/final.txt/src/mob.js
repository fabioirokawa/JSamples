class Mob{

    constructor(maxlife, minAP, maxAP, minMP, maxMP, width, height, game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight
        this.width = width;
        this.height = height;

        this.position = {
            x: this.gameWidth - this.gameWidth / 4,
            y: this.gameHeight - this.gameHeight/3 - this.height
        }

        this.attackSpeed = 0;
        this.maxAttackSpeed = 10;

        this.maxlife = maxlife;
        this.life = this.maxlife;

        this.maxarmor = this.maxlife;
        this.armor = 0;

        this.minAttackPower = minAP;
        this.maxAttackPower = maxAP;

        this.minMagicPower = minMP;
        this.maxMagicPower = maxMP;
    }

    draw(ctx) {
        ctx.fillStyle = "#aaa";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        //do something on update
        this.position.x += this.attackSpeed;
        if(this.position.x < 225) this.position.x = 225;
        else if(this.position.x > this.gameWidth - this.gameWidth / 4) this.position.x = this.gameWidth - this.gameWidth / 4;
        
    }

    attack(mob){
        this.attackSpeed = -this.maxAttackSpeed;

        setTimeout(() => {
            this.attackSpeed = this.maxAttackSpeed;
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

    ///
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

    makeAction(char){

        var rand = Math.floor(Math.random() * 100);
        var returnTime = 0;
        if(rand < 40){
            this.attack(char);
            returnTime = 3200;
        }else if(rand >= 40 && rand < 75){
            this.block();
            returnTime = 700
        }else{
            this.special(char);
            returnTime = 1500;
        }   

        return returnTime;

    }

}
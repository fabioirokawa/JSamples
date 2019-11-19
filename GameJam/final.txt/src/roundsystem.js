class RoundSystem{

    constructor(char, mob, actionMenu){

        this.currentRound = 0;
        this.actionSelected = false;

        this.char = char;
        this.mob = mob;
        this.actionMenu = actionMenu;

        this.canUpdateAgain = true;
        
    }

    update(deltaTime){

        if(!this.canUpdateAgain) return;

        if(this.currentRound % 2 == 0){

            this.actionMenu.enable();

            if(this.actionSelected){
                var selection = this.actionMenu.potentialSelection;
                this.canUpdateAgain = false;
                this.actionSelected = false;
                this.actionMenu.disable();

                var waitTime = 0;

                switch(selection){
                    case 0:
                        waitTime = this.char.attack(this.mob);
                    break;
                    case 1:
                        waitTime = this.char.block();
                    break;
                    case 2:
                        waitTime = this.char.special(this.mob);
                    break;
                }

                setTimeout(() => {
                    console.log("Player made the action");

                    this.currentRound += 1;
                        if(this.currentRound % 2 == 0) this.actionSelected = false;
                    this.canUpdateAgain = true;
                    console.log("-----Char-----")
                    console.log("Vida: " + this.char.life);
                    console.log("Armadura: " + this.char.armor);
                    console.log("-----Mob-----")
                    console.log("Vida: " + this.mob.life);
                    console.log("Armadura: " + this.mob.armor);
                }, waitTime);

                

            }

        }else{
            this.canUpdateAgain = false;
            this.actionMenu.disable();

            var waitTime = this.mob.makeAction(this.char);

            setTimeout(() => {
                console.log("Mob made the action");

                this.currentRound += 1;
                    if(this.currentRound % 2 == 0) this.actionSelected = false;
                this.canUpdateAgain = true;
                console.log("-----Char-----")
                console.log("Vida: " + this.char.life);
                console.log("Armadura: " + this.char.armor);
                console.log("-----Mob-----")
                console.log("Vida: " + this.mob.life);
                console.log("Armadura: " + this.mob.armor);

            }, waitTime);

        }

    }

}
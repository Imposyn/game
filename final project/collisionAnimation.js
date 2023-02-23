export class CollisionAnimation {
    constructor(game, x, y){
        this.game = game; 
        this.image = document.getElementById('collisionAnimation');
        this.sprideWidth = 200;
        this.spriteHeight = 179;
        this.sizeModifier = (Math.random() + 0.5)*0.7;
        this.width = this.sprideWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * 0.5;
        this.y = y - this.width * 0.5; 
        this.frameX = 0;
        this.maxFrame = 4; 
        this.markedForDeletion = false;
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.sprideWidth, 0, this.sprideWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
    update(){
        this.x -= this.game.speed;
    }
}
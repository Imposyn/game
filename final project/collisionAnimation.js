export class CollisionAnimation {
    constructor(game, x, y){
        this.game = game; 
        this.image = document.getElementById('collisionAnimation');
        this.sprideWidth = 200;
        this.spriteHeight = 179;
        this.sizeModifier = (Math.random() + 0.5)*0.75;
        this.width = this.sprideWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5; 
        this.frameX = 0;
        this.maxFrame = 4; 
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 5;
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0;
        // räknar från 0 till frameInterval om och om igen
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.sprideWidth, 0, this.sprideWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
    update(deltaTime){
        this.x -= this.game.speed;
        if (this.frameTimer > this.frameInterval){
            this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        //resettar om till 0 och den kommer tjäna nästa animationframe i animationsheet
        // gör så man kan räkna för nästa loop
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
        //deltatime kontrollerar snabbheten av hur snabbt boom poppar med hjälp av fps
    }
}
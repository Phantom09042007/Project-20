var Back_ground, Back_groundIMG
var Tom, jerry, Tom_img1, Tom_animation, Tom_img3, jerry_img1, jerry_animation, jerry_img3

function preload() {
    Back_groundIMG = loadImage("images/garden.png");
    Tom_img1 = loadAnimation("images/cat1.png");
    Tom_animation = loadAnimation("images/cat2.png","images/cat3.png");
    Tom_img3 = loadAnimation("images/cat4.png");
    jerry_img1 = loadAnimation("images/mouse1.png");
    jerry_animation = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_img3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    Back_ground = createSprite(500,400,50,50);
    Back_ground.addImage(Back_groundIMG);
    Tom = createSprite(700, 600, 50, 50);
    Tom.addAnimation("still",Tom_img1);
    Tom.scale = 0.2
    jerry = createSprite(200,620,50,50)
    jerry.addAnimation("Still",jerry_img1);
    jerry.scale = 0.17
    Tom.debug = true 
    jerry.debug  = true
    Tom.setCollider("circle",0,0,300);
    jerry.setCollider("circle",0,0,300);
}

function draw() {

    background(255);
    keyPressed();
    if (Tom.isTouching(jerry)){
        Tom.addAnimation("Ending",Tom_img3);
        Tom.changeAnimation("Ending");
        Tom.velocityX = 0
        jerry.addAnimation("Nowending",jerry_img3);
        jerry.changeAnimation("Nowending");
    }
        
        

    drawSprites();
}


function keyPressed(){
    if (keyDown("space")){
        Tom.velocityX = -3
        Tom.addAnimation("Changing",Tom_animation);
        Tom.changeAnimation("Changing")
        jerry.addAnimation("Nowchanging",jerry_animation);
        jerry.changeAnimation("Nowchanging");
        
    }




}




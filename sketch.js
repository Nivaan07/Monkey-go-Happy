var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground;
var score = 0;
var bananaGroup

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {

  createCanvas(400, 400);

  monkey = createSprite(50, 370, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

 

  ground = createSprite(200, 400, 400, 10);
  ground.velocityX = -5;
  //ground.x=ground.width/2;


 bananaGroup = new Group();
 obstacleGroup = new Group();
  
score = 0;
}


function draw() {
  background("grey");

  fill("red")
  text("Score: "+ score, 320,30);
    score = score + Math.round(getFrameRate()/60);


  if (keyDown("space")) {

    monkey.velocityY = -15;

  }

  monkey.velocityY = monkey.velocityY + 0.6


  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }



  monkey.collide(ground);
  banana();
  Obstacle();
  
 

  drawSprites();

}

function banana() {
    
    if (frameCount % 80 === 0) {
    var banana1= createSprite(600,190,40,10);
    banana1.y = Math.round(random(120,200));
    banana1.addImage(bananaImage);
    banana1.scale = 0.1;
    banana1.velocityX = -3;
      
    banana1.lifeTime = 100

    bananaGroup.add(banana1);

  }
}

function Obstacle() {

  if (frameCount % 300 === 0) {
    var obstacle = createSprite(300, 380, 10, 40);
    obstacle.velocityX = -2;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1

  }
}
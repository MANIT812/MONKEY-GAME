
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=10;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
createCanvas(600,600);  
monkey=createSprite(150,500,30,30);  
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.2;
ground=createSprite(300,575,1200,50);
ground.velocityX=10;
ground.shapeColor="lightgreen";
bananaGroup=new Group();
obstacleGroup=new Group();
}
function draw() {
background("lightblue");
if (ground.x>600){
    ground.x=ground.width/2;
}
if (keyDown("space") && monkey.y>487){
    monkey.velocityY=monkey.velocityY-20;
}
monkey.velocityY=monkey.velocityY+1;
monkey.collide(ground);
if (monkey.isTouching(bananaGroup)){
  score=score+2;
  bananaGroup.destroyEach();
}
if (monkey.isTouching(obstacleGroup)){
    score=score-2;
  obstacleGroup.destroyEach();
}
rocks();
bananas();
drawSprites();
textSize(20);
text("SURVIVAL COUNT: "+score,250,20)
}
function rocks(){
if (frameCount%107===0){
  obstacle=createSprite(610,520,30,30);
  obstacle.velocityX=-(10+score/5);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.lifetime=70;
  obstacleGroup.add(obstacle);
}  
}
function bananas(){
  if (frameCount%80===0){
  banana=createSprite(610,50,30,30);
  banana.velocityX=-(10+score/4);
  banana.addImage(bananaImage);
  banana.scale=0.2;
  banana.y=Math.round(random(300,350))
  banana.lifetime=70;
  bananaGroup.add(banana);
  }  
}
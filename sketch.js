const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflake,snowflakeImg;
var bgImg;
var IceGirl;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg");
  girlImage = loadImage("Snow7.webp")
}
function setup() {
  createCanvas(800,400);
  IceGirl = girlImage
  IceGirl = new IceGirl(400,100)
}

function draw() {
  
  background(bgImg);  
  drawSprites();
  createSnowflake();

}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}

  function moveCharacter(){

    Matter.Body.setPosition(IceGirl.body, {x:mouseX,y:mouseY})
    
    }

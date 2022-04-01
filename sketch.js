
var trex ,trex_running;
function preload(){
  //Load trex
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running)
  trex.scale= 0.5

  //create the ground
  ground= createSprite(200,180,400,20)
}

function draw(){
  background("white")

  if(keyDown("space")){
    //Add velocity Y to the trex
    trex.velocityY= -10
  }
  //To make trex come down to ground
  trex.velocityY= trex.velocityY + 0.5

  //trex colliding with the ground
  trex.collide(ground)

  //Draw the sprites
  drawSprites()

}

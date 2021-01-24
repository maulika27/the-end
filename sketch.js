var fishImg, wormImg, sharkImg
var backgroundImg;
var foodGroup, obstacleGroup;


function preload(){
  fishImg = loadImage("fish.png")
  wormImg = loadImage("worm.jpg")
  sharkImg= loadImage("shark.png");
  backgroungImg = loadImage("sea floor.jpg")
}


function setup() {
  createCanvas(displayWidth - 30, displayHeight-20);
  
  fish = createSprite(10, 100, 50, 50)
  fish.addImage("FishImg", fishImg);
  fish.scale = 0.15
  
  foodGroup = new Group ();
  obstacleGroup = new Group();

}
 

function draw(){
 background(backgroungImg); 
for (var i = 0; i<foodGroup.length; i++){
  if(foodGroup.get(i).isTouching(fish)){
    foodGroup.get(i).visible = false;
    
  }
}
drawSprites();

if(fish.isTouching(obstacleGroup)){
  textSize(60);
  fill("black")
  text("game Over",100,150);
  shark.velocityX=0
  worm.velocityX=0
  shark.visibilty=false;






}

if(keyDown("U")){
  fish.velocityY= -7;
}

if(keyDown("D")){
  fish.velocityY= 7;
}

 
camera.position.y = displayHeight/2;
camera.position.x = fish.x
spawnWorm();
spawnShark();


 
}

function spawnWorm(){
 if(frameCount % 60 === 0){
    var worm = createSprite(displayWidth, 50, 50,50);
    worm.addImage(wormImg);
    worm.velocityX = -7;
    worm.scale = 0.1;
    worm.lifetime = 200;
    foodGroup.add(worm);
  }
}

function spawnShark(){
  if(frameCount % 200 === 0){
     var shark = createSprite(displayWidth, 100, 50,50);
    shark.addImage(sharkImg);
     shark.velocityX = -10;
     shark.scale = 1;
    shark.lifetime = 200;
     obstacleGroup.add(shark);
   }
 }
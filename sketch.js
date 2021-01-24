//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  engine = Engine.create();
  world = engine.world;

  dog = new Dog("dogImg.png");
  
}


function draw() { 
  
  background(46,139,87);
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy);
    }

  drawSprites();
    textSize();
    fill();
    stroke();

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  database.ref("/").update({
    food:x
})
}


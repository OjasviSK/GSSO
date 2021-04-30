var car,wall;
var weight, speed;

function setup() {
  createCanvas(800,400);

  wall=createSprite(750,200,30,380);
  car=createSprite(0,200,50,50);

  speed=random(30,80);
  weight=random(1500,3000);

  wall.shapeColor="white";
  car.shapeColor="blue";

  car.velocityX=speed;


}

function draw() {
  background("black");  

  if(wall.x-car.x<car.width/2+wall.width/2){

    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500

    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation>80 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation<80){
      car.shapeColor="green";
    }
  }

  drawSprites();
}
var car, wall;
var speed, weight, deformation;
function setup() {
  createCanvas(800,400);
  speed = random(55, 90);
  weight = random(400,1500);
  car = createSprite(50, 200, 10, 60);
  wall = createSprite(600,200,15,height/2);
  wall.shapeColor = (80,80,80);
  car.velocityX = speed;
  car.collide(wall);
  deformation = 0
}

function draw() {
  background(255,255,255);
  if (wall.x - car.x < (car.width+wall.width)/2) {
      deformation = 0.5*weight*speed*speed/22500
      car.velocityX = 0
  if (deformation > 180) {
   car.shapeColor = color(250,0,0); 
  }
  if (deformation < 180 && deformation > 100) {
   car.shapeColor = color(230,230,0) 
  } 
  if (deformation<100) {
   car.shapeColor = color(0,255,0) 
  }
  }
    drawSprites();
}
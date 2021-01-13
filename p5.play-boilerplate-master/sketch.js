var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,400);

  speed=random(55,90)
  weight=random(400,1500)

car=createSprite(50, 200, 50, 50)
car.velocityX = speed;
car.shapeColor = 'black'
wall=createSprite(1000, 200, 60, height/2)
wall.shapeColor = 'white'
}


function draw() {
  background('purple');  
  drawSprites();
  
  if (wall.x-car.x < (car.width+wall.width)/2) {

    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=rgb(255,0,0);
  }  
  
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=rgb(230,230,0)
  }
  
  if(deformation<100)
  {
    car.shapeColor=rgb(0,255,0)
  }}
}


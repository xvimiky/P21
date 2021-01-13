var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83)
  wall=createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = "brown";
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(75, 175, 80, 20)
  bullet.shapeColor = "yellow"
  bullet.velocityX = 155;

}
function draw() {
  background("black");  
  drawSprites();

  if(hasCollided(bullet, wall))
  {
    bullet.velocity=0;
    var damage = 0.5* weight* speed* speed/(thickness* thickness *thickness);


    if(damage>10)
    {
      wall.shapeColor=rgb(255,0,0);
    }

    if(damage<10)
      {
        wall.shapeColor=rgb(0,255,0)
      }
  }

}

function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}

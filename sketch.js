var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,500);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,80,15);
  wall = createSprite(1200,200, thickness, height/2);

  bullet.velocityX = speed
}

function draw() {
  background("yellow"); 
  
  bullet.shapeColor = "black"
    if (wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if( damage < 8.75){
      wall.shapeColor="lightgreen" ;
    }
    
    if( damage > 8.75){
      wall.shapeColor="red";
    }

  }

  drawSprites();
}
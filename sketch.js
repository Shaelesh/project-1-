var box 
function setup() {
  createCanvas(1500,1000);
}

function draw() 
{
  background("yellow");
  if(keyIsDown(DOWN_ARROW)){
 background("red")
  }
  if(keyIsDown(RIGHT_ARROW)){
   background("green")
  }
  if(keyIsDown(LEFT_ARROW)){
  background("blue")
  }
  if(keyIsDown(UP_ARROW)){
  background("pink")
  }

drawSprites();
}

let rect1,rect2;


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(100,200,50,50);
}


function draw() {
  let con1 = rect1.width/2 + rect2.width/2;
  background(255,255,255);
  //rect2.x = mouseX;
  //rect2.y= mouseY;  
  rect2.velocityX = 1;
  if((rect1.x - rect2.x < con1  &&  rect2.x - rect1.x < con1) && (rect1.y - rect2.y < con1 && rect1.y - rect2.y < con1)){
    vel=rect2.velocityX;
    vel = -vel;
    rect2.velocityX = -1;
  }
  else{
    rect1.shapeColor = "grey";
  }
  drawSprites();
}
var fixedrec,movingrec;
var square1,square2,square3,square4;
function setup() {
  createCanvas(1200,1200);

  //creating sprite
  fixedrec=createSprite(600, 200, 200, 100);
  fixedrec.shapeColor="red";
  
  //creating sprite
  movingrec=createSprite(100,200,200,100);
  movingrec.shapeColor="red";

  //creating squares
  square1=createSprite(200,200,100,100);
  square2=createSprite(300,300,100,100);
  square3=createSprite(400,400,100,100);
  square4=createSprite(500,500,100,100);
  square1.shapeColor="red";
  square2.shapeColor="red";
  square3.shapeColor="red";
  square4.shapeColor="red";
}

function draw() {
  background(0);
  
  //controls to square1
  square1.x=World.mouseX;
  square1.y=World.mouseY;
  
//using isTouching from my library
if(isTouching(square1,square2)) {
  square1.shapeColor="pink";
  square2.shapeColor="pink";
}
else{
  square1.shapeColor="red";
  square2.shapeColor="red";
}

drawSprites();
}


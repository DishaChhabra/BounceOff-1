function setup() {
  createCanvas(800,400);
  fixrect = createSprite(200, 100, 70, 50);
  fixrect.velocityY = 5;
  moverect = createSprite(200,300,50,70);
  moverect.velocityY = -5;

  o1 = createSprite(100,200,80,80);
  o1.velocityX = 5;
  o1.shapeColor = "blue";
  o2 = createSprite(700,200,80,80);
  o2.velocityX = -5;
  o2.shapeColor = "red";
}

function draw() {
  background("pink");
  bounceOff(o1,o2);
  bounceOff(fixrect, moverect);
  drawSprites();
}

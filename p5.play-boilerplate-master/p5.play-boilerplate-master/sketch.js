var bird
function setup() {
  createCanvas(1400,750);
bird=createSprite(150, 200, 50, 50);
}
function draw() {
  background("pink");  
  drawSprites();
  if (keyDown("space")){
    bird.y=bird.y-20
  }
  bird.y=bird.y+10
}
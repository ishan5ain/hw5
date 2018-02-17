//run this on http://alpha.editor.p5js.org/
//y-axis is the speed of change
//x-axis is the number of circles

var numCircle = 50;
var xCircle = [];
var yCircle = [];
var dCircle = [];
var colorCircle = [];
var changeSpeed = 0.1;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for(var i = 0; i < numCircle; i++){
    xCircle[i] = random(0, width);
    yCircle[i] = height/2;
    dCircle[i] = random(20, 100);
    // dCircle[i] = map(xCircle[i], 0, width, 20, 100);
    colorCircle[i] = random(0, 360);
  }
}

function draw() {
  background(255);
  noStroke();

  for(var i = 0; i < numCircle; i++){
    fill(colorCircle[i], 100, 100, 0.5);
    ellipse(xCircle[i], yCircle[i], dCircle[i]);
    if(random() < changeSpeed){
      dCircle[i] = random(20,100);
      xCircle[i] = random(0, width);
      // dCircle[i] = map(xCircle[i], 0, width, 20, 100);
    }
  }
}

function mouseMoved(){
  changeSpeed = map(mouseY, 0, height, 0, 0.2);
  numCircle = map(mouseX, 0, width, 2, 100);
}

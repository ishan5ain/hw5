//to be run on http://alpha.editor.p5js.org/

var x = 230;
var y = 220;
var dropX = [];
var dropY = [];
var xSpeed = [];
var ySpeed = [];
var numDrops = 500;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100)

  for(var i = 0; i < numDrops; i++){
    dropX[i] = 230;
    dropY[i] = random(220, 222);
    // xSpeed[i] = random(0, 0.01);
    ySpeed[i] = random(0.5, 3);
    xSpeed[i] = map(ySpeed[i], 0.5, 3, 0, 0.05);
  }
}

function draw() {
  background(0);
  noStroke();

  fill(0, 0, 100, 100)
  rect(0, 200, x, 20);
  rect(220, 197, 10, 26);

  fill(0, 0, 100, 20)

  for(var i = 0; i < numDrops; i++){
    // print("printing drop " + i);
    ellipse(dropX[i], dropY[i], 10, 10);
    dropX[i] = dropX[i] + xSpeed[i];
    dropY[i] = dropY[i] + ySpeed[i];

    if (dropY[i] > height) {
      dropY[i] = random(210, 222);
      dropX[i] = random(230, 235);
    }
  }


}

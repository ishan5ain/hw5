//run this on http://alpha.editor.p5js.org/
// y-axis controls density of smoke

var numSqr = 500;
var squares = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES);
  // rectMode(CENTER);

  for (var i = 0; i < numSqr; i++) {
    squares[i] = {
      x: 0,
      y: 0,
      tX: 210,
      tY: 290,
      size: 20,
      fade: 255,
      ySpeed: random(0.2, 2),
      xSpeed: random(-0.1, 0.1),
      // c: color(0, 0, 100, 0.5),
      r: 1,
      rSpeed: random(1, 2),
      draw: function() {
        push();
        noStroke();
        this.fade = map(this.tY, height, 50, 1, 0);
        fill(0, 0, 100, this.fade);
        translate(this.tX, this.tY);
        rotate(this.r);
        this.size = map(this.tY, 290, 0, 10, 40);
        rect(this.x, this.y, this.size, this.size);
        this.r = this.r + this.rSpeed;
        this.size = this.size + 0.01;
        pop();
      },
      move: function() {
        this.tY = this.tY - this.ySpeed;
        this.tX = this.tX + this.xSpeed;
      }
    };
  }
}

function draw() {
  background(0);
  noStroke();
  print(mouseY);

  if (mouseY > height) {
    numSqr = 500;
  }

  fill(255);
  rect(195, height, 30, -100);

  for (var i = 0; i < numSqr; i++) {
    squares[i].draw();
    squares[i].move();

    if (squares[i].tY < 0) {
      squares[i].tY = 290;
      squares[i].tX = 210;
      squares[i].size = 20;
    }
  }
}

function mouseMoved() {
  numSqr = map(mouseY, height, 0, 50, 500);
}

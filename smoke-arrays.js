//run this on http://alpha.editor.p5js.org/
// y-axis controls density of smoke
// x-axis map the direction of wind

var numSqr = 500;
var squares = [];
var windLeft = -0.1;
var windRight = 0.1;

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
      xSpeed: random(windLeft, windRight),
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
      },
      setWind: function(left, right) {
        this.xSpeed = random(left, right);
      }
    };
  }
}

function draw() {
  background(0);
  noStroke();
  // print(mouseY);

  fill(255);
  rect(195, height, 30, -100);

  for (var i = 0; i < numSqr; i++) {
    squares[i].draw();
    squares[i].move();
    squares[i].setWind(windLeft, windRight);

    if (squares[i].tY < 0) {
      squares[i].tY = 290;
      squares[i].tX = 210;
      squares[i].size = 20;
    }
  }
}

function mouseMoved() {
  if (mouseY <= height) {
    numSqr = map(mouseY, height, 0, 50, 500);
    print(numSqr);
  } else {
    numSqr = 50;
  }

  if (mouseX > 0 && mouseX <= width / 2) {
    windLeft = map(mouseX, 0, width / 2, -1, -0.1);
    // print(windLeft);
  } else {
    windLeft = -0.1;
  }
  if (mouseX > width / 2 && mouseX <= width) {
    windRight = map(mouseX, width / 2, width, 0.1, 1);
  } else {
    windRight = 0.1;
  }

}

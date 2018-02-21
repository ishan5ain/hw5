// var nB2 = 123;
// var nC3 = 130;
// var nD3 = 146;
// var nE3 = 164;

// var notes = [nB2, nC3, nD3, nE3];

// var scaleAMajor = [
//   120,
//   147,
//   177,
//   193.6,
//   129.6,
//   170,
//   115.3
// ] //A, B, C#, D, E, F#, G#

var firstNote = 200;
var lastNote = 415;
var note = firstNote;
// var note = scaleAMajor[0];
var osc1;

rate = 0.1;
var rCircle = 10;
var tRadius = 10;
var shift = 25;
var rKey = [10, 10, 10, 10, 10, 10, 10, 10];
var tKeyRadius = [10, 10, 10, 10, 10, 10, 10, 10];

var snare808;
var hihat808;
var clap808;
var kick808;
var tom808;
var kickDeep;
var snarePinch;
var snarePunch;

function preload() {
  snare808 = loadSound('drum-samples/snare-808.wav');
  hihat808 = loadSound('drum-samples/hihat-808.wav');
  clap808 = loadSound('drum-samples/clap-808.wav');
  kick808 = loadSound('drum-samples/kick-808.wav');
  tom808 = loadSound('drum-samples/tom-808.wav');
  kickDeep = loadSound('drum-samples/kick-deep.wav');
  snarePinch = loadSound('drum-samples/snare-pinch.wav');
  snarePunch = loadSound('drum-samples/snare-punch.wav');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  soundFormats('wav', 'mp3', 'ogg');

  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  osc1.freq(note);
  osc1.amp(0);
  osc1.start();

  snare808.setVolume(0.8);
  hihat808.setVolume(0.8);
  clap808.setVolume(0.8);
  kick808.setVolume(0.8);
  tom808.setVolume(0.8);
  kickDeep.setVolume(0.8);
  snarePinch.setVolume(0.8);
  snarePunch.setVolume(0.8);

  kick808.play();
}

function draw() {
  background(220);
  // print(note);
  noStroke();
  noCursor();

  rCircle = tRadius * rate + rCircle * (1 - rate);
  rKey[0] = tKeyRadius[0] * rate + rKey[0] * (1 - rate);
  rKey[1] = tKeyRadius[1] * rate + rKey[1] * (1 - rate);
  rKey[2] = tKeyRadius[2] * rate + rKey[2] * (1 - rate);
  rKey[3] = tKeyRadius[3] * rate + rKey[3] * (1 - rate);
  rKey[4] = tKeyRadius[4] * rate + rKey[4] * (1 - rate);
  rKey[5] = tKeyRadius[5] * rate + rKey[5] * (1 - rate);
  rKey[6] = tKeyRadius[6] * rate + rKey[6] * (1 - rate);
  rKey[7] = tKeyRadius[7] * rate + rKey[7] * (1 - rate);

  // var whichNote = ceil(map(mouseX, 0, width, 0, 7));
  note = map(mouseX, 0, width, firstNote, lastNote);
  // note = scaleAMajor[whichNote];
  osc1.freq(note);

  push();
  fill(map(mouseX, 0, width, 0, 360), 100, 100);
  ellipse(mouseX, mouseY, rCircle);
  pop();

  fill(0, 0, 100);
  rect(0, height * 0.8, width, height * 0.2);
  fill(0, 100, 0, 0.5);
  ellipse((width / 8 * 0) + shift, height * 0.9, rKey[0]);
  ellipse((width / 8 * 1) + shift, height * 0.9, rKey[1]);
  ellipse((width / 8 * 2) + shift, height * 0.9, rKey[2]);
  ellipse((width / 8 * 3) + shift, height * 0.9, rKey[3]);
  ellipse((width / 8 * 4) + shift, height * 0.9, rKey[4]);
  ellipse((width / 8 * 5) + shift, height * 0.9, rKey[5]);
  ellipse((width / 8 * 6) + shift, height * 0.9, rKey[6]);
  ellipse((width / 8 * 7) + shift, height * 0.9, rKey[7]);
}

function mousePressed() {
  var osc = osc1;
  osc.amp(0.5, 0.1);
  tRadius = 50;
}

function mouseReleased() {
  var osc = osc1;
  osc.amp(0, 0.1);
  tRadius = 10;
}

function keyPressed() {
  print("got key press for ", key);
  // var osc;c
  switch (key) {
    case 'Q':
      kick808.play();
      tKeyRadius[0] = 50;
      break;

    case 'W':
      kickDeep.play();
      tKeyRadius[1] = 50;
      break;

    case 'E':
      snare808.play();
      tKeyRadius[2] = 50;
      break;

    case 'R':
      hihat808.play();
      tKeyRadius[3] = 50;
      break;

    case 'A':
      clap808.play();
      tKeyRadius[4] = 50;
      break;

    case 'S':
      tom808.play();
      tKeyRadius[5] = 50;
      break;

    case 'D':
      snarePinch.play();
      tKeyRadius[6] = 50;
      break;

    case 'F':
      snarePunch.play();
      tKeyRadius[7] = 50;
      break;

  }
}

function keyReleased() {
  print("got key press for ", key);
  // var osc;
  switch (key) {
    case 'Q':
      // kick808.play();
      tKeyRadius[0] = 10;
      break;

    case 'W':
      // kickDeep.play();
      tKeyRadius[1] = 10;
      break;

    case 'E':
      // snare808.play();
      tKeyRadius[2] = 10;
      break;

    case 'R':
      // hihat808.play();
      tKeyRadius[3] = 10;
      break;

    case 'A':
      // clap808.play();
      tKeyRadius[4] = 10;
      break;

    case 'S':
      // tom808.play();
      tKeyRadius[5] = 10;
      break;

    case 'D':
      // snarePinch.play();
      tKeyRadius[6] = 10;
      break;

    case 'F':
      // snarePunch.play();
      tKeyRadius[7] = 10;
      break;

    case 'C':
      background(220);
      break;

  }
}

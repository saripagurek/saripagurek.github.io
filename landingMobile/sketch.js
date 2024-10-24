var rectLocation;
var cw = window.innerWidth;
var ch = window.innerHeight; 
var fontsize = 128;
var timer = 0;

class Shape{
    constructor(x, y, img, w, h){
    this.x = x;
    this.y = y;
    this.location = createVector(this.x, this.y);
    this.img = img;
    this.vel = random(2, 8);
    this.w = w * 0.75;
    this.h = h * 0.75;
  }
  show(){
    image(this.img, this.location.x, this.location.y, this.w, this.h);
  }
}

function setup() {
  canvas = createCanvas(cw,ch);
  spot = createVector(100, 100);
  
  if (cw <= 1200) {
    fontsize = 84;
    if (cw <= 670) {
      fontsize = 48;
    }
  }
  myFont = loadFont('NeueMetanaMono-SemiBold.otf');

  p1 = loadImage('p1.png');
  p2 = loadImage('p2.png');
  p3 = loadImage('p3.png');
  p5 = loadImage('p5.png');
  p6 = loadImage('p6.png');
  p7 = loadImage('p7.png');
  p8 = loadImage('p8.png');
  
  s1 = new Shape(50, ch/2, p1, 173, 557);
  s2 = new Shape(-50, ch - 200, p2, 3, 819);
  s3 = new Shape(cw/2, ch/3, p3, 647, 433.34);
  s5 = new Shape(cw/3, ch/3, p5, 891, 787);
  s6 = new Shape(cw/6, ch/4, p6, 179, 204);
  s7 = new Shape(-200, 0, p7, 645, 208);
  s8 = new Shape(-50, ch/4, p8, 891, 179);
  s9 = new Shape(-cw/6, -ch/6, p1, 173, 557);
  shapes = [s1, s2, s3, s5, s6, s7, s8, s9];
}

function draw() {
    background(254, 252, 240);
  
    if(timer >= 200) {
      rx = random(-500, cw + 500);
      ry = random(-500, ch + 500);
      spot = createVector(rx, ry);
      timer = 0;
    }
  
    textFont(myFont, fontsize);
    for (let i = 0; i < shapes.length; i++) {
      currShape = shapes[i];
      var target = createVector(currShape.x + spot.x/currShape.vel, currShape.y + spot.y/currShape.vel);
      var distance = target.dist(currShape.location);
      var mappedDistance = map(distance, 100, 0, 1.5, 0.5);
      if (distance < 10) {
        mappedDistance = map(distance, 10, 0, 0.5, 0);
      }
      target.sub(currShape.location);
      target.normalize();
      target.mult(mappedDistance);  
      currShape.location.add(target);
      currShape.show();
    }
  //textAlign(LEFT, CENTER);
  //name = "SARI\nPAGUREK\nVAN MOSSEL";
  //nameW = textWidth(name);
  //text(name, cw/9, ch/2);
  timer = timer + 1;
}

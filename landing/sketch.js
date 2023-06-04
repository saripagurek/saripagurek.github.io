var rectLocation;
var cw = window.innerWidth;
var ch = window.innerHeight; 
var fontsize = 128;

class Shape{
    constructor(x, y, img, w, h){
    this.x = x;
    this.y = y;
    this.location = createVector(this.x, this.y);
    this.img = img;
    this.vel = random(1, 8);
    this.w = w
    this.h = h;
  }
  show(){
    image(this.img, this.location.x, this.location.y, this.w, this.h);
  }
}

function setup() {
  canvas = createCanvas(cw,ch);
  
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
  s7 = new Shape(200, 0, p7, 645, 332);
  s8 = new Shape(-50, ch/4, p8, 891, 179);
  shapes = [s1, s2, s3, s5, s6, s7, s8];
}

function draw() {
    background(254, 252, 240);
    textFont(myFont, fontsize);
    for (let i = 0; i < shapes.length; i++) {
      currShape = shapes[i];
      var target = createVector(currShape.x + mouseX/currShape.vel, currShape.y + mouseY/currShape.vel);
      var distance = target.dist(currShape.location);
      var mappedDistance = map(distance, 100, 0, 1.5, 0.5);
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
}

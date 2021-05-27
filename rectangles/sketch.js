function setup() {
    var body = document.body;
    var w = body.offsetWidth;
    var h = body.offsetHeight;
    var sketchCanvas = createCanvas(w,h);
    console.log(sketchCanvas);
  colorMode(HSB, 360, 100, 100);
  background(255);
  noStroke();
}
function windowResized() {
  var body = document.body;
  var w = body.offsetWidth;
  var h = body.offsetHeight;
  var sketchCanvas = resizeCanvas(w,h);
  background(255);
  number=0
}

var w;
var h;
var xcor;
var ycor;
var number;
var one;
var two;
var three;

number = 0;
function draw() {

 if (number < 50) {
   fill(one, two, three);
   one = random(1, 360);
   two = random(1, 100);
   three = random(1, 100);
   h = random(1, 250);
   w = random(1,250);
   xcor = random(1,width);
   ycor = random(1, height);
   rect(xcor, ycor, h, w);
   number = number + 1;
 }

}

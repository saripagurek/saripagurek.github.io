function setup() {
    var body = document.body;
    var w = body.offsetWidth;
    var h = body.offsetWidth;
    var sketchCanvas = createCanvas(w,h);
    console.log(sketchCanvas);
 // colorMode(HSB, 360, 100, 100);
  background(255);
  noStroke();
}
function windowResized() {
  var body = document.body;
  var w = body.offsetWidth;
  var h = body.offsetWidth;
  var sketchCanvas = resizeCanvas(w,h);
  clear()
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

 if (number < 70) {
   fill (random(["#343338", "#25472e", "#bf4928", "#d492a4", "#082147", "#33153E", "#C4C4C4"]));
   //one = random(1, 360);
   //two = random(1, 100);
  // three = random(1, 100);
   h = random(10, 200);
   w = random(10,200);
   xcor = random(1,width);
   ycor = random(1, height);
   rect(xcor, ycor, h, w);
   number = number + 1;
 }
  
}


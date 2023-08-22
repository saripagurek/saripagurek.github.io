var rectLocation;
var cw = window.innerWidth;
var ch = window.innerHeight - 100; 

function displayEye(x, y, d)
{
    let angle = atan2(mouseY - y, mouseX - x);
    let pd = 0.9 * d;
    let pr = 0.75 * d;
    let x2 = x + pd * cos(angle);
    let y2 = y + pd * sin(angle);
    fill("#272829");
    noStroke();
    circle(x2, y2, 15);
}

function setup() {
  canvas = createCanvas(cw,ch + 100);
  comp = loadImage('comp.png');
}

function draw() {
    background("#F8B219");
    imageMode(CENTER);
    image(comp, cw / 2, ch / 2, comp.width / 3, comp.height / 3);
    displayEye(cw / 2 + 25, ch / 2 - 25, 10);
    displayEye(cw / 2 + 60, ch / 2 - 25, 10); 
}


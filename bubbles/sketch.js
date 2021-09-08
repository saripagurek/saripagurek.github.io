var i = 0
var x;
var y;
var z;
var d;
let xNoise = 0.0;
let yNoise = 0.0;
var positions = []
var sizes = []
function setup() {
  createCanvas(600, 600, WEBGL);

  for (var i = 0; i < 40; i += 1) {
    x = random(-50, 50);
    y = random(-50, 50);
    z = random(-100, 0);
    positions.push(createVector(x, y, z));
    d = random(5, 40)
    sizes.push(d);
  }
}

function draw() {
  background("#988ebd");
  ambientLight("#cdc2f0");
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(145, 98, 189, -dirX, -dirY, -0.8);
  directionalLight(16, 30, 117, 0, -500, 0);
  ambientMaterial(230, 233, 247);
  xNoise = xNoise + 0.01;
  yNoise = yNoise + 0.01;

  for (var i = 0; i < 40; i += 1) {
    push();
    var position = positions[i]
    var size = sizes[i]
    noStroke();
    let n = noise(xNoise, 1000 * position.z) * 100 - 50
    let l = noise(yNoise, 1000 * position.z) * 100 - 50
    translate(position.x + n,position.y + l, position.z)

    sphere(size);
    pop();
  }


}

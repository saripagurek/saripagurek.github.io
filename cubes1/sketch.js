var cubes = []

var spawnpoints = [
  [0, 0, 0]
]

function setup() {
  createCanvas(500, 500, WEBGL);
  fill (random(["#fc4903", "#fcdb03", "#0320fc"]));
  stroke (random(["#13239c", "#b84214", "#fca30a"]))
  var number = 0
  while (number < 100) {
    spawnpoints = spawnpoints.filter(function(position) {
      var [x, y, z] = position;
      var closecubes = cubes.filter(function(position2) {
        var [x2, y2, z2, width, height, depth] = position2;
        return abs(x - x2) <= width && abs(y - y2) <= height && abs(z - z2) <= depth;
      })
      return closecubes.length <4;
    })
    var [x, y, z] = random(spawnpoints);
    spawnpoints = spawnpoints.filter(
      function(position) {
        var [x2, y2, z2] = position;
        return x2 != x || y2 != y || z2 != z;
      }
    )
    //This makes the cubes
    var width = random([10, 50])
    var height = random([10, 50])
    var depth = random([10, 50])
    cubes.push(
      [x, y, z, width, height, depth]
    )
    spawnpoints.push(
      [x - width/2, y, z],
      [x, y - height/2, z],
      [x, y, z - depth/2],
      [x + width/2, y, z],
      [x, y + height/2, z],
      [x, y, z + depth/2]
    )
    number = number + 1;
  }
}


function draw() {
  background(200);
  orbitControl();

  for (var cubeposition of cubes) {
    var [x, y, z, width, height, depth] = cubeposition;
    cube(width, height, depth, x, y, z);
  }
}

function cube(
  width,
  height,
  depth,
  x,
  y,
  z
) {
  push();
  rotateY(0.5);
  rotateX(0.5);
  translate(x, y, z);
  box(width, height, depth);
  pop();

}
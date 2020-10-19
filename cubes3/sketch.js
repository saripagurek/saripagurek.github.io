var cubes = []

var spawnpoints = [
  [0, 0, 0]
]

var suffix = Math.random().toString(36).substring(7);

var cubecolor;

function setup() {
  createCanvas(500, 500, WEBGL);
  noFill();
  cubecolor = color(random(["#13239c", "#a3190a", "#fca30a", "#91b4b8", "#1f4d2c", "#604173", "#c472a7", "#ffffff"]));
  stroke (cubecolor);
  strokeWeight(4);
  var number = 0
  while (number < 30) {
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
    var width = random(20, 90)
    var height = random(20, 90)
    var depth = random(20, 90)
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

function obj(){
  var data = `mtllib colour${suffix}.mtl\n`;
  var last = 0;
  data = data + "usemtl colour\n";
  for (var cubeposition of cubes) {
    var [x, y, z, width, height, depth] = cubeposition;
    data = data + `v ${x - width/2} ${y - height/2} ${z - depth/2}\n`;
    data = data + `v ${x + width/2} ${y - height/2} ${z - depth/2}\n`;
    data = data + `v ${x - width/2} ${y + height/2} ${z - depth/2}\n`;
    data = data + `v ${x - width/2} ${y - height/2} ${z + depth/2}\n`;
    data = data + `v ${x - width/2} ${y + height/2} ${z + depth/2}\n`;
    data = data + `v ${x + width/2} ${y + height/2} ${z + depth/2}\n`;
    data = data + `v ${x + width/2} ${y + height/2} ${z - depth/2}\n`;
    data = data + `v ${x + width/2} ${y - height/2} ${z + depth/2}\n`;
    data = data + `f ${last + 2} ${last + 8} ${last + 4} ${last + 1}\n`;
    data = data + `f ${last + 3} ${last + 5} ${last + 6} ${last + 7}\n`;
    data = data + `f ${last + 3} ${last + 1} ${last + 4} ${last + 5}\n`;
    data = data + `f ${last + 6} ${last + 8} ${last + 2} ${last + 7}\n`;
    data = data + `f ${last + 7} ${last + 2} ${last + 1} ${last + 3}\n`;
    data = data + `f ${last + 6} ${last + 5} ${last + 4} ${last + 8}\n`;
    last = last + 8;
  }
  return data;
}

function download(data, name){
  var file = new Blob([data], {type: "text/plain"});
  var a = document.createElement("a");
  var url = URL.createObjectURL(file);
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(function(){
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}

function mtl(){
  let r = red(cubecolor)/255;
  let g = green(cubecolor)/255;
  let b = blue(cubecolor)/255;
  var data = "newmtl colour\n";
  data = data + `Kd ${r} ${g} ${b}`;
  return data;
}

function keyPressed(){
  download(obj(),`3Dshape${suffix}.obj`);
  download(mtl(), `colour${suffix}.mtl`);
}


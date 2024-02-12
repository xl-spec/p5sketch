let list_of_shapes = [];
let canvasX = 1200;
let canvasY = 800;
let flipR = 1;
let flipB = 1;

function setup() {
  createCanvas(canvasX, canvasY);
  background(20); 
}

function draw() {
  // print("s")

  // let rand1 = random(10, 50)
  print(frameRate)
  // print(frameCount)
  // if (frameCount % 1 == 0){
  //   list_of_shapes.push(addCircle());
  // }
  // for (let i = 0; i <= 10; i++){
  list_of_shapes.push(addCircle());
  // }
  if (list_of_shapes.length > 300) {
    list_of_shapes.splice(0, 10); // Remove the first 10 elements
  }
  for (let i = 0; i < list_of_shapes.length; i++) {
    
    list_of_shapes[i].radius += 1
    list_of_shapes[i].colorR += flipR
    if (list_of_shapes[i].colorR >= 255){
      flipR = -1
    
    } else if (list_of_shapes[i].colorR <= 0){
      flipR = 1
    }
     
    if (list_of_shapes[i].colorB >= 255){
      flipB = -1
    } else if (list_of_shapes[i].colorB <= 0){
      flipB = 1
    }

    displayCircle(list_of_shapes[i]);
  }
}

function addCircle() {
  let circle = {
    // x: random(100, canvasX - 100),
    // y: random(100, canvasY - 100),
    // radius: random(10, 100),
    x: mouseX,
    y: mouseY,
    radius: 10,
    colorR: random(255),
    colorG: 0,
    colorB: random(255),
    // fillColor: color(this.colorR, this.colorG, this.colorB)
  };
  return circle;
}

function displayCircle(circle) {
  fill(color(circle.colorR, circle.colorG, circle.colorB));
  ellipse(circle.x, circle.y, circle.radius * 2);
  // setAlpha(100)r
  // setAlpha();
}

// class Mob{
//   constructor(){

//   }


//   display() {
//     line(random(10, 500), random(100, 500), random(10, 500), random(100, 500));
//     stroke(random(0, 255));
//   }
// }
let array = [];
let backgroundColor = 200; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(backgroundColor);
    backgroundColor -= 3;
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped (){

  console.log(`key ${key} is being typed`)


  if (key === 's'){
      // save this image 
    saveCanvas('filename', 'png');
  } else if (key === 'd'){
        // display this image
    beginShape();
    for(let i = 0; i < array.length - 1; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    
      // curve vertex 
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }

  return false;
}

function mousePressed() {
  console.log("mouse pressed function");
  array = [];
}
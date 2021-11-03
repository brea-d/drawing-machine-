function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  }
}

function keyTyped (){

  console.log(`key ${key} is being typed`)


  if (key === 's'){
      // save this image 
    saveCanvas('filename', 'png');

  
  }
}
let array = [];
// let backgroundColor = 200; 

let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);

  drawGrid();
  strokeWeight(5);

}

function draw() {
  if (mousePressed) {
  
    background(220, 50, 133, 20);

    strokeWeight(strokeWidth);

    noiseOffset += 0.05; 
    strokeWidth = noise(noiseOffset) * 100;



    // line(mouseX, mouseY, pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);

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
  } else if (key === 'd'){
        // display this image
    beginShape();
    for(let i = 0; i < array.length - 1; i++)
    {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    
      // curve vertex 
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  } else if (key === 'c'); {
    // clear this image
    clear();
  }

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid() {
  numCells = 40;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j<= height; j += height / numCells) {
      
      if (fillColor === 255){
        fillColor = 200; 
      } else {
          fillColor = 255;
        }
        fill(fillColor);
    rect(i, j, width / numCells, height / numCells);
        }
      }

    strokeWeight(5);
  }

// window.change_color = change_color;

let array = [];
// let backgroundColor = 200; 

let noiseOffset = 5;
let strokeWidth = 2;


// let stroke_color = document.style.background;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(9, 29, 87, 20);

  drawGrid();
  strokeWeight(3);
}

// document.getElementById('u').onclick = change_color(this);

// function change_color(element) {
//   stroke_color = element.style.background; 
//   console.log('color');
// }

// document.getElementById('change_color').onclick = change_color; 

// function change_color(element) {
//   document.body.style.color;
//   return false;
// }

function draw() {
  if (mousePressed) {

  
    background(9, 29, 87, 15);

    strokeWeight(strokeWidth);

    noiseOffset += 0.30; 
    strokeWidth = noise(noiseOffset) * 100;



    // line(mouseX, mouseY, pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);

      stroke(map(mouseX, mouseY, 217, 172, 37, 30), 217, 100, 37, 255);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped (){

  console.log(`key ${key} is being typed`)


  if (key === 's'){
      // save this image 
    saveCanvas('lightpainting', 'png');
  } else if (key === 'c'){
        // clear this image
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

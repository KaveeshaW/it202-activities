const demoCanvas = document.getElementById('canvas-demo').getContext('2d');

const notContextCanvas = document.getElementById('canvas-demo');

function drawFirstLetter() {
  demoCanvas.strokeStyle = "blue";
  demoCanvas.lineWidth = 10;

  demoCanvas.moveTo(10, 10);
  demoCanvas.lineTo(10, 110);
  demoCanvas.moveTo(10, 60);
  demoCanvas.lineTo(50, 10);
  demoCanvas.moveTo(10, 60);
  demoCanvas.lineTo(50, 110);

  demoCanvas.stroke();// draws (by outlining our shapes in the path)
}

function drawShape() {
  demoCanvas.fillStyle = "red";
  demoCanvas.lineWidth = 1;
  demoCanvas.moveTo(90, 200);
  demoCanvas.arc(90, 200, 30, 0, 360, false);
  demoCanvas.fill();
}

window.onload = function() {
  
  //fills the canvas with a purple background
  demoCanvas.beginPath();
  demoCanvas.fillStyle = "purple";
  demoCanvas.fillRect(0, 0, notContextCanvas.width, notContextCanvas.height);
  demoCanvas.closePath();

  //draws my first initial (which is a k)
  demoCanvas.beginPath();
  drawFirstLetter();
  demoCanvas.closePath();

  //draws a circle
  demoCanvas.beginPath();
  drawShape();
  demoCanvas.closePath();

  demoCanvas.beginPath();
  demoCanvas.fillStyle = "pink";
  demoCanvas.font = "30px Times New Roman";
  demoCanvas.fillText("660036548", 30, 300, 300);
  demoCanvas.closePath();
  
}


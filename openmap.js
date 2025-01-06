let canvas = document.getElementById('myCanvas5');
let ctx = canvas.getContext('2d');

// Set canvas dimensions (these match the visible viewport size)
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// Load the large background image
let backgroundImage = new Image();
// backgroundImage.src = '2x/map5.png';
backgroundImage.src = '0.83x/lake.png';

// Character position (start at the center of the canvas)
let x = canvasWidth / 2;
let y = canvasHeight / 2;

// The top-left corner of the "viewport" within the background image
let viewportX = 0;
let viewportY = 0;

// The size of the background image 
const imageWidth = 1967; 
const imageHeight = 1967; 
// const imageWidth = 4740;
// const imageHeight = 4740;
const scaleFactor = 1;

// Character size and movement step
const characterRadius = 5;
const movementStep = 30;

// Define the button's position on the background image
const buttonImageX = 1685;
const buttonImageY = 660;

const lakebuttonImageX = 450;
const lakebuttonImageY = 1725;

function drawCanvas() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Adjust the visible area of the image based on the scale factor
  const scaledViewportWidth = canvasWidth / scaleFactor;
  const scaledViewportHeight = canvasHeight / scaleFactor;

  // Draw the visible portion of the background image
  ctx.drawImage(
    backgroundImage,
    viewportX,
    viewportY,
    scaledViewportWidth,
    scaledViewportHeight,
    0,
    0,
    canvasWidth,
    canvasHeight
  );

  // Adjust character's position relative to the viewport and scale
  const characterPosX = (x - viewportX) * scaleFactor;
  const characterPosY = (y - viewportY) * scaleFactor;

  // Draw the character
  ctx.beginPath();
  ctx.arc(characterPosX, characterPosY, characterRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'yellowgreen';
  ctx.fill();
  ctx.closePath();

// Update button visibility and position
const churchButton = document.getElementById('church-button');
const lakeButton = document.getElementById('lake-button');

if (
  buttonImageX >= viewportX &&
  buttonImageX <= viewportX + (canvasWidth / scaleFactor) &&
  buttonImageY >= viewportY - 100 &&
  buttonImageY <= viewportY + (canvasHeight / scaleFactor)
) {
  // Translate background image coordinates to scaled canvas coordinates
  const buttonCanvasX = (buttonImageX - viewportX);
  const buttonCanvasY = (buttonImageY - viewportY) * 0.8;

  // Position the button in the canvas coordinate system
  churchButton.style.left = `${buttonCanvasX}px`;
  churchButton.style.top = `${buttonCanvasY}px`;
  churchButton.style.visibility = 'visible';
} else {
  churchButton.style.visibility = 'hidden';
}

if (
  lakebuttonImageX >= viewportX - 200 &&
  lakebuttonImageX <= viewportX + (canvasWidth / scaleFactor) &&
  lakebuttonImageY >= viewportY &&
  lakebuttonImageY <= viewportY + (canvasHeight / scaleFactor)
) {
  // Translate background image coordinates to scaled canvas coordinates
  const lakebuttonCanvasX = (lakebuttonImageX - viewportX) * 0.7;
  const lakebuttonCanvasY = (lakebuttonImageY - viewportY) * 0.8;

  // Position the button in the canvas coordinate system
  lakeButton.style.left = `${lakebuttonCanvasX}px`;
  lakeButton.style.top = `${lakebuttonCanvasY}px`;
  lakeButton.style.visibility = 'visible';
} else {
  lakeButton.style.visibility = 'hidden';
}
}

// Function to highlight a button
function highlightButton(buttonId) {
  // Remove active class from all buttons
  document.getElementById('left-button').classList.remove('active');
  document.getElementById('right-button').classList.remove('active');
  document.getElementById('up-button').classList.remove('active');
  document.getElementById('down-button').classList.remove('active');

  // Add active class to the clicked or pressed button
  document.getElementById(buttonId).classList.add('active');
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (x > 50) {
        x -= movementStep;
        if (x < viewportX + 50) {
          viewportX = Math.max(0, viewportX - movementStep);
        }
      }
      highlightButton('left-button');
      break;
    case "ArrowRight":
      if (x < imageWidth - 50) {
        x += movementStep;
        if (x > viewportX + canvasWidth - 50) {
          viewportX = Math.min(imageWidth - canvasWidth, viewportX + movementStep);
        }
      }
      highlightButton('right-button');
      break;
    case "ArrowUp":
      if (y > 50) {
        y -= movementStep;
        // Update the viewport when y is near the top edge
        if (y < viewportY + 50) {
          viewportY = Math.max(0, viewportY - movementStep);
        }
      }
      highlightButton('up-button');
      break;
    case "ArrowDown":
      if (y < imageHeight - 50) {
        y += movementStep;
        // Adjust the viewport when the character moves near the bottom
        if (y > viewportY + canvasHeight - 50) {
          viewportY = Math.min(imageHeight - canvasHeight, viewportY + movementStep);
        }
      }
      highlightButton('down-button');
      break;
  }
  drawCanvas();
});



// Event listeners for button clicks
document.getElementById('left-button').addEventListener('click', () => {
  if (x > 50) {
    x -= movementStep;
    if (x < viewportX + 50) {
      viewportX = Math.max(0, viewportX - movementStep);
    }
  }
  drawCanvas();
});

document.getElementById('right-button').addEventListener('click', () => {
  if (x < imageWidth - 50) {
    x += movementStep;
    if (x > viewportX + canvasWidth - 50) {
      viewportX = Math.min(imageWidth - canvasWidth, viewportX + movementStep);
    }
  }
  drawCanvas();
});

document.getElementById('up-button').addEventListener('click', () => {
  if (y > 50) {
    y -= movementStep;
    if (y < viewportY + 50) {
      viewportY = Math.max(0, viewportY - movementStep);
    }
  }
  drawCanvas();
});

document.getElementById('down-button').addEventListener('click', () => {
  if (y < imageHeight - 50) {
    y += movementStep;
    if (y> viewportY + canvasHeight - 50) {
      viewportY = Math.min(imageHeight - canvasHeight, viewportY + movementStep);
    }
  }
  drawCanvas();
});


// Draw the initial canvas once the background image is loaded
backgroundImage.onload = drawCanvas;
// let canvas = document.getElementById('myCanvas5');
// let ctx = canvas.getContext('2d');


// let x = canvas.width/6;
// let y = 50;

// // Circle (character)
// function drawCharacter() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.arc(x, y, 1.66, 0, Math.PI * 2);
//   ctx.fillStyle = 'yellowgreen';
//   ctx.fill();
//   ctx.closePath();
// }

// // Function to highlight a button
// function highlightButton(buttonId) {
//   // Remove active class from all buttons
//   document.getElementById('left-button').classList.remove('active');
//   document.getElementById('right-button').classList.remove('active');
//   document.getElementById('up-button').classList.remove('active');
//   document.getElementById('down-button').classList.remove('active');

//   // Add active class to the clicked or pressed button
//   document.getElementById(buttonId).classList.add('active');
// }

// // const noiseContainer = document.getElementById("noise");
// // const noises = ["rustle", "stick", "crunch", "snap", "bush", "bramble", "leaves", "rock", "branch"];

// // Event listener for arrow keys
// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowLeft":
//       if (x > 10) {
//         x -= 30; 
//         // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
//         // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
//       }
//       highlightButton('left-button');
//       break;
//     case "ArrowRight":
//       if (x < canvas.width - 10) {
//         x += 30;
//         // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
//         // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
//       }
//       highlightButton('right-button');
//       break;
//     case "ArrowUp":
//       if (y > 20) {
//         y -= 30;
//         // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
//         // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
//       }
//       highlightButton('up-button');
//       break;
//     case "ArrowDown":
//       if (y + 5 >= canvas.height) {
//         window.location.href = "outside_3.html";
//       }
//       y += 30;
//       // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
//       // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
//       highlightButton('down-button');
//       break;
//   }
//     // Update story text
//     if (y >= canvas.height / 3 && y < canvas.height / 3 + 30) { 
//       const typewriterText = document.querySelector(".typewriter");
//       typewriterText.textContent = "They think highly of me for it, as if I'm some savior...";
//       typewriterText.style.color = "black";
//       typewriterText.style.fontStyle = "italic";
//     }
//     else if (y >= (2 * canvas.height) / 3 && y < (2 * canvas.height) / 3 + 30) {
//       const typewriterText = document.querySelector(".typewriter");
//       typewriterText.textContent = "...I wonder where I'd be if I hadn't stayed on this mountain...";
//       typewriterText.style.color = "black";
//       typewriterText.style.fontStyle = "italic";
//     }
//   drawCharacter();
// });

// // Event listeners for button clicks
// document.getElementById('left-button').addEventListener('click', () => {
//   if (x > 10) {
//     x -= 30;
//   }
//   drawCharacter();
// });

// document.getElementById('right-button').addEventListener('click', () => {
//   if (x < canvas.width - 10) {
//     x += 30;
//   }
//   drawCharacter();
// });

// document.getElementById('up-button').addEventListener('click', () => {
//   if (y > 20) {
//     y -= 30;
//   }
//   drawCharacter();
// });

// document.getElementById('down-button').addEventListener('click', () => {
//   if (y + 5 >= canvas.height) {
//     window.location.href = "outside_3.html";
//   }
//   y += 30;
//   drawCharacter();
// });

// drawCharacter();

let canvas = document.getElementById('myCanvas5');
let ctx = canvas.getContext('2d');

// Set canvas dimensions (these match the visible viewport size)
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// Load the large background image
let backgroundImage = new Image();
backgroundImage.src = '2x/map2.png';

// Character position (start at the center of the canvas)
let characterX = canvasWidth / 2;
let characterY = canvasHeight / 2;

// The top-left corner of the "viewport" within the background image
let viewportX = 0;
let viewportY = 0;

// The size of the background image (set this based on the actual image dimensions)
const imageWidth = 4736; // Example size
const imageHeight = 4736; // Example size
const scaleFactor = 1;

// Character size and movement step
const characterRadius = 5;
const movementStep = 30;

function drawCanvas() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Adjust the visible area of the image based on the scale factor
  const scaledViewportWidth = canvasWidth / scaleFactor;
  const scaledViewportHeight = canvasHeight / scaleFactor;

  // Draw the visible portion of the background image
  ctx.drawImage(
    backgroundImage,
    viewportX, // Source X (from the original image)
    viewportY, // Source Y (from the original image)
    scaledViewportWidth, // Source width (scaled to show more or less of the image)
    scaledViewportHeight, // Source height (scaled)
    0, // Destination X (on the canvas)
    0, // Destination Y (on the canvas)
    canvasWidth, // Destination width (matches canvas size)
    canvasHeight // Destination height (matches canvas size)
  );

  // Adjust character's position relative to the viewport and scale
  const characterPosX = (characterX - viewportX) * scaleFactor;
  const characterPosY = (characterY - viewportY) * scaleFactor;

  // Draw the character
  ctx.beginPath();
  ctx.arc(characterPosX, characterPosY, characterRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'yellowgreen';
  ctx.fill();
  ctx.closePath();
}


// Update the character and viewport positions based on movement
function updatePosition(direction) {
  switch (direction) {
    case 'left':
      if (characterX > 0) {
        characterX -= movementStep;
        if (characterX < viewportX + 50) {
          viewportX = Math.max(0, viewportX - movementStep);
        }
      }
      break;
    case 'right':
      if (characterX < imageWidth) {
        characterX += movementStep;
        if (characterX > viewportX + canvasWidth - 50) {
          viewportX = Math.min(imageWidth - canvasWidth, viewportX + movementStep);
        }
      }
      break;
    case 'up':
      if (characterY > 0) {
        characterY -= movementStep;
        if (characterY < viewportY + 50) {
          viewportY = Math.max(0, viewportY - movementStep);
        }
      }
      break;
    case 'down':
      if (characterY < imageHeight) {
        characterY += movementStep;
        if (characterY > viewportY + canvasHeight - 50) {
          viewportY = Math.min(imageHeight - canvasHeight, viewportY + movementStep);
        }
      }
      break;
  }

  // Redraw the canvas after updating the position
  drawCanvas();
}

// Handle key presses for character movement
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      updatePosition('left');
      break;
    case 'ArrowRight':
      updatePosition('right');
      break;
    case 'ArrowUp':
      updatePosition('up');
      break;
    case 'ArrowDown':
      updatePosition('down');
      break;
  }
});

// Draw the initial canvas once the background image is loaded
backgroundImage.onload = drawCanvas;
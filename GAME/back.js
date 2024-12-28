let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 50;

function drawGrid() {
  const GRID_SIZE = 4;
  const RESOLUTION = 130;
  const COLOR_SCALE = 255;

  let pixel_size = canvas.width / RESOLUTION;
  let num_pixels = GRID_SIZE / RESOLUTION;

  for (let y = 0; y < GRID_SIZE; y += num_pixels / GRID_SIZE) {
    for (let x = 0; x < GRID_SIZE; x += num_pixels / GRID_SIZE) {
      let v = parseInt(perlin.get(x, y) * COLOR_SCALE);
      ctx.fillStyle = `rgb(${v}, ${v}, ${v})`;
      ctx.fillRect(
        x / GRID_SIZE * canvas.width,
        y / GRID_SIZE * canvas.width,
        pixel_size,
        pixel_size
      );
    }
  }
}

// Static black circle at the top of the canvas
function drawGhostCircle() {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 30, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.closePath();
}

// Character movement circle
function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawGhostCircle(); // Draw the static black circle
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'yellowgreen';
  ctx.fill();
  ctx.closePath();
}

const noiseContainer = document.getElementById("noise");
const noises = ["."];

// Event listener for arrow keys
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (x > 10) {
        x -= 30;
        const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowRight":
      if (x < canvas.width - 10) {
        x += 30;
        const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowUp":
      if (y > 20) {
        y -= 30;
        if (y <= 0) {
          window.location.href = "ghosthouse.html";
        }
        const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowDown":
      y += 30;
      const randomNoise = noises[Math.floor(Math.random() * noises.length)];
      noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      break;
  }
  console.log(`Circle position: x = ${x}, y = ${y}`);
  drawCharacter();
});

// Initial draw
drawCharacter();

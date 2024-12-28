// Perlin noise texture (https://github.com/joeiddon/perlin?tab=readme-ov-file)

// Copyright (c) 2013, Joseph Gentle

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.


let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = 50;

function drawGrid() {
  const GRID_SIZE = 4;
  const RESOLUTION = 130;
  const COLOR_SCALE = 255;

  let pixel_size = canvas.width / RESOLUTION;
  let num_pixels = GRID_SIZE / RESOLUTION;

  for (let y = 0; y < GRID_SIZE; y += num_pixels / GRID_SIZE){
    for (let x = 0; x < GRID_SIZE; x += num_pixels / GRID_SIZE){
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

// Circle
function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'yellowgreen';
  ctx.fill();
  ctx.closePath();
}

const noiseContainer = document.getElementById("noise");
const noises = ["rustle", "stick", "crunch", "snap", "bush", "bramble", "leaves", "rock", "branch", "bug"];

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
        const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowDown":
      if (y + 5 >= canvas.height) {
        window.location.href = "outside_2.html";
      }
      y += 30;
      const randomNoise = noises[Math.floor(Math.random() * noises.length)];
      noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      break;
  }
  // Update story text
  if (y >= canvas.height / 3 && y < canvas.height / 3 + 30) {
    const typewriterText = document.querySelector(".typewriter p");
    typewriterText.textContent = "...All my peers have gone off to the big cities to make a handsome living...";
    const typewriterDiv = document.querySelector(".typewriter");
    typewriterDiv.classList.remove("typewriter");
    void typewriterDiv.offsetWidth;
    typewriterDiv.classList.add("typewriter");
  }
  else if (y >= (2 * canvas.height) / 3 && y < (2 * canvas.height) / 3 + 30) { 
    const typewriterText = document.querySelector(".typewriter p");
    typewriterText.textContent = "...And yet I seem to have been the only one bound to this place...";
    const typewriterDiv = document.querySelector(".typewriter");
    typewriterDiv.classList.remove("typewriter");
    void typewriterDiv.offsetWidth;
    typewriterDiv.classList.add("typewriter");
  }
  console.log(`Circle position: x = ${x}, y = ${y}`); 
  drawCharacter();
});

drawCharacter();

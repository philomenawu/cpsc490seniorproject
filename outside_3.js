// Perlin noise texture (https://github.com/joeiddon/perlin?tab=readme-ov-file)

// Copyright (c) 2013, Joseph Gentle

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
let canvas = document.getElementById('myCanvas3');
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
        const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowDown":
      if (y + 5 >= canvas.height) {
        window.location.href = "choice.html";
        const popupWidth = 600;
        const popupHeight = 600;

        const left1 = (screen.width - 2 * popupWidth) / 2;
        const top1 = (screen.height - popupHeight) / 2;
        const left2 = left1 + popupWidth + 50;
        const top2 = (screen.height - popupHeight) / 2;
        window.open(
          "dialogue_2.html",
          "popupWindow2",
          `width=${popupWidth},height=${popupHeight},left=${left2},top=${top2},scrollbars=no,resizable=no`
        );
        window.open(
        "ghost.html",
        "popupWindow1",
        `width=${popupWidth},height=${popupHeight},left=${left1},top=${top1},scrollbars=no,resizable=no`
        );
      }
      y += 30;
      const randomNoise = noises[Math.floor(Math.random() * noises.length)];
      noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      break;
  };
      // Update story text
      if (y >= canvas.height / 3 && y < canvas.height / 3 + 30) { 
        const typewriterText = document.querySelector(".typewriter p");
        typewriterText.textContent = "...One step in the wrong direction and you'll find yourself in a different world...";
        const typewriterDiv = document.querySelector(".typewriter");
        typewriterDiv.classList.remove("typewriter");
        void typewriterDiv.offsetWidth;
        typewriterDiv.classList.add("typewriter");
      }
      else if (y >= (2 * canvas.height) / 3 && y < (2 * canvas.height / 3) + 30) {
        const typewriterText = document.querySelector(".typewriterbottom p");
        typewriterText.textContent = "...It's rather quiet tonight...";
        const typewriterDiv = document.querySelector(".typewriterbottom");
        typewriterDiv.classList.remove("typewriterbottom");
        void typewriterDiv.offsetWidth;
        typewriterDiv.classList.add("typewriterbottom");
      }
  drawCharacter();
});

drawCharacter();

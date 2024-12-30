let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = 50;

// Circle (character)
function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'yellowgreen';
  ctx.fill();
  ctx.closePath();
}

// const noiseContainer = document.getElementById("noise");
// const noises = ["rustle", "stick", "crunch", "snap", "bush", "bramble", "leaves", "rock", "branch", "bug"];

// Event listener for arrow keys
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (x > 10) {
        x -= 30;
        // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowRight":
      if (x < canvas.width - 10) {
        x += 30;
        // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowUp":
      if (y > 20) {
        y -= 30;
        // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      break;
    case "ArrowDown":
      if (y + 5 >= canvas.height) {
        window.location.href = "outside_2.html";
      }
      y += 30;
      // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
      // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      break;
  }
  drawCharacter();
});


// Event listeners for button clicks
document.getElementById('left-button').addEventListener('click', () => {
  if (x > 10) {
    x -= 30;
  }
  drawCharacter();
});

document.getElementById('right-button').addEventListener('click', () => {
  if (x < canvas.width - 10) {
    x += 30;
  }
  drawCharacter();
});

document.getElementById('up-button').addEventListener('click', () => {
  if (y > 20) {
    y -= 30;
  }
  drawCharacter();
});

document.getElementById('down-button').addEventListener('click', () => {
  if (y + 5 >= canvas.height) {
    window.location.href = "outside_2.html";
  }
  y += 30;
  drawCharacter();
});

// Initial draw
drawCharacter();

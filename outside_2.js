let canvas = document.getElementById('myCanvas2');
let ctx = canvas.getContext('2d');

let x = canvas.width/2;
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

const noiseContainer = document.getElementById("noise");
const noises = ["rustle", "stick", "crunch", "snap", "bush", "bramble", "leaves", "rock", "branch"];

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
        window.location.href = "outside_3.html";
      }
      y += 30;
      const randomNoise = noises[Math.floor(Math.random() * noises.length)];
      noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      break;
  }
    // Update story text
    if (y >= canvas.height / 3 && y < canvas.height / 3 + 30) { 
      const typewriterText = document.querySelector(".typewriter p");
      typewriterText.textContent = "They think highly of me for it, as if I'm some sort of savior...";
      const typewriterDiv = document.querySelector(".typewriter");
      typewriterDiv.classList.remove("typewriter");
      void typewriterDiv.offsetWidth;
      typewriterDiv.classList.add("typewriter");
    }
    else if (y >= (2 * canvas.height) / 3 && y < (2 * canvas.height) / 3 + 30) {
      const typewriterText = document.querySelector(".typewriter p");
      typewriterText.textContent = "...I wonder where I'd be if I hadn't stayed on this mountain...";
      const typewriterDiv = document.querySelector(".typewriter");
      typewriterDiv.classList.remove("typewriter");
      void typewriterDiv.offsetWidth;
      typewriterDiv.classList.add("typewriter");
    }
  drawCharacter();
});

drawCharacter();

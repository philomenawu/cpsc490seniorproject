let canvas = document.getElementById('myCanvas3');
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

// const noiseContainer = document.getElementById("noise");
// const noises = ["."];

// Event listener for arrow keys
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (x > 10) {
        x -= 30; 
        // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      highlightButton('left-button');
      break;
    case "ArrowRight":
      if (x < canvas.width - 10) {
        x += 30;
        // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      highlightButton('right-button');
      break;
    case "ArrowUp":
      if (y > 20) {
        y -= 30;
        // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
        // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      }
      highlightButton('up-button');
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
      highlightButton('down-button');
      // const randomNoise = noises[Math.floor(Math.random() * noises.length)];
      // noiseContainer.innerHTML += `<p>${randomNoise}</p>`;
      break;
  };
      // Update story text
      if (y >= canvas.height / 3 && y < canvas.height / 3 + 30) { 
        const typewriterText = document.querySelector(".typewriter");
        typewriterText.textContent = "...One step in the wrong direction and you'll find yourself in a different world...";
        typewriterText.style.color = "black";
        typewriterText.style.fontStyle = "italic";
      }
      else if (y >= (2 * canvas.height) / 3 && y < (2 * canvas.height / 3) + 30) {
        const typewriterText = document.querySelector(".typewriter");
        typewriterText.textContent = "...It's rather quiet tonight...";
        typewriterText.style.color = "black";
        typewriterText.style.fontStyle = "italic";
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
    window.location.href = "outside_3.html";
  }
  y += 30;
  drawCharacter();
});

drawCharacter();

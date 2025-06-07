const btn = document.getElementById("floatBtn");
let posX = 100;
let posY = 100;
let dirX = 1;
let dirY = 1;
let speed = 1;
let speedMultiplier = 1;

let speedTimeout = null;

function moveButton() {
  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  posX += dirX * speed * speedMultiplier;
  posY += dirY * speed * speedMultiplier;

  if (posX <= 0 || posX >= maxX) dirX *= -1;
  if (posY <= 0 || posY >= maxY) dirY *= -1;

  btn.style.left = posX + "px";
  btn.style.top = posY + "px";

  requestAnimationFrame(moveButton);
}

btn.addEventListener("mouseenter", () => {
  // Random direction
  dirX = Math.random() < 0.5 ? -1 : 1;
  dirY = Math.random() < 0.5 ? -1 : 1;

  speedMultiplier = 2;

  // Clear any existing timer
  if (speedTimeout) clearTimeout(speedTimeout);

  // Set 2-second timer to reset speed
  speedTimeout = setTimeout(() => {
    speedMultiplier = 1;
  }, 2000);
});

moveButton();


document.querySelectorAll('.text-content').forEach((textContent, index) => {
  textContent.addEventListener('click', () => {
    const imageContent = document.getElementById(`imageContent${index + 1}`);
    imageContent.style.display = imageContent.style.display === 'none' ? 'block' : 'none';
  });
});







  
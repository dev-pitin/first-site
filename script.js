// Modo Claro/Escuro
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("light");
});

// Botões
function abrirWhatsapp() {
  window.open("https://wa.me/5512992541664", "_blank");
}
function abrirEmail() {
  window.open("mailto:matthaus.rab@gmail.com", "_blank");
}
function abrirLinkedIn() {
  window.open("https://www.linkedin.com/in/lucas-matth%C3%A4us-r-500536b3/", "_blank");
}

// Supernova Animation
const canvas = document.getElementById("supernovaCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  return {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: Math.random() * 2,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    angle: Math.random() * 2 * Math.PI,
    speed: Math.random() * 4 + 1
  };
}

function initParticles() {
  for (let i = 0; i < 200; i++) {
    particles.push(createParticle());
  }
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
  });
  requestAnimationFrame(draw);
}

initParticles();
draw();

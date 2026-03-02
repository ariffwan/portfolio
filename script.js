// ===== Typing Effect =====

const words = [
  "Web Developer",
  "Problem Solver",
  "Low Code Programmer",
  "Football Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typed = document.getElementById("typed");

function type() {
  currentWord = words[i];

  if (isDeleting) {
    typed.textContent = currentWord.substring(0, j--);
  } else {
    typed.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 40 : 80);
}

type();


// ===== Animated Abstract Lines =====

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;

  for (let i = 0; i < 40; i++) {
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x += 20) {
      const y =
        canvas.height * 0.6 +
        Math.sin(x * 0.01 + i * 0.3 + t) * 60 +
        i * 6;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.stroke();
  }

  t += 0.01;
  requestAnimationFrame(draw);
}

draw();
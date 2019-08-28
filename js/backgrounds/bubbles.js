var canvas = document.getElementById('bg-bubbles'),
  ctx = canvas.getContext('2d'),
  width = window.innerWidth,
  height = window.innerHeight,
  total = 30,
  minR = 7,
  maxR = 30,
  speed = 0.002,
  x = width / total,
  winWidth = window.innerWidth,
  winHeight = window.innerHeight;

var bubbles = [];

for (var i = 0; i < total; i++) {
  var bubble = {
    x: i * x,
    y: height * Math.random(),
    r: minR + Math.random() * (maxR - minR),
    speed: 10 * Math.random()
  };
  bubbles.push(bubble);
}

function initBubbles() {
  canvas.width = width;
  canvas.height = height;
  for (i = 0; i < bubbles.length; i++) {
    var b = bubbles[i];
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);

    b.alpha = .5 * (b.y / height);
    b.speed += speed;

    ctx.strokeStyle = 'rgba(255, 255, 255, .5)';
    ctx.stroke();
    ctx.fillStyle = 'hsla(203, 75%, 69%,' + b.alpha + ')';
    ctx.fill();
    b.y -= b.speed;
    if (b.y < 0) {
      b.y = height;
      b.speed = Math.random() * 5;
    }
  }
}

function drawBubbles() {
  initBubbles();
  window.requestAnimationFrame(drawBubbles);
}

function resizeCanvas() {
  winWidth = window.innerWidth,
    winHeight = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  drawBubbles();
}

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
const canvas = document.getElementById('geom-canvas');
const ctx = canvas.getContext('2d');

// Simple placeholder visualization
ctx.fillStyle = '#f9f9f9';
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 40; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const r = 5 + Math.random() * 15;

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = '#3366ff';
  ctx.stroke();
}

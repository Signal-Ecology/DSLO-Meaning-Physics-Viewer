const canvas = document.getElementById('geom-canvas');
const ctx = canvas.getContext('2d');

// Structured DSLO geometry — six field nodes
const fields = [
  { name: 'Drift', x: 100, y: 200, color: '#ff5555' },
  { name: 'Continuity', x: 220, y: 120, color: '#55aaff' },
  { name: 'Curvature', x: 340, y: 200, color: '#ffaa00' },
  { name: 'Collapse', x: 460, y: 120, color: '#aa55ff' },
  { name: 'Restoration', x: 580, y: 200, color: '#55cc55' },
  { name: 'Susceptibility', x: 700, y: 120, color: '#ff88aa' }
];

// Background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw nodes
fields.forEach(f => {
  ctx.beginPath();
  ctx.arc(f.x, f.y, 30, 0, Math.PI * 2);
  ctx.fillStyle = f.color;
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(f.name, f.x, f.y + 50);
});

// Draw connecting field vectors
ctx.strokeStyle = '#333';
ctx.lineWidth = 1.5;
for (let i = 0; i < fields.length - 1; i++) {
  const a = fields[i];
  const b = fields[i + 1];
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
}

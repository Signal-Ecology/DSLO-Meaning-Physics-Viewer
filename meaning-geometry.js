// loader.js must expose window.Engine
async function loadFields() {
  await Engine.loadFields();
  return Engine.fields;
}

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
// ------------------------------------------------------------
// Load DSLO JSON field data and render overlays
// ------------------------------------------------------------
loadFields().then(fieldsData => {
  // Example: draw drift vectors if present
  if (fieldsData.drift && fieldsData.drift.vectors) {
    ctx.strokeStyle = '#ff5555';
    ctx.lineWidth = 1;

    fieldsData.drift.vectors.forEach(v => {
      ctx.beginPath();
      ctx.moveTo(v.x1, v.y1);
      ctx.lineTo(v.x2, v.y2);
      ctx.stroke();
    });
  }

  // Example: draw susceptibility windows
  if (fieldsData.susceptibility && fieldsData.susceptibility.windows) {
    ctx.fillStyle = 'rgba(255, 136, 170, 0.25)';

    fieldsData.susceptibility.windows.forEach(w => {
      ctx.beginPath();
      ctx.rect(w.x, w.y, w.width, w.height);
      ctx.fill();
    });
  }

  // Example: draw collapse boundaries
  if (fieldsData.collapse && fieldsData.collapse.boundaries) {
    ctx.strokeStyle = '#aa55ff';
    ctx.setLineDash([4, 4]);

    fieldsData.collapse.boundaries.forEach(b => {
      ctx.beginPath();
      ctx.rect(b.x, b.y, b.width, b.height);
      ctx.stroke();
    });

    ctx.setLineDash([]);
  }

  // Example: draw restoration flows
  if (fieldsData.restoration && fieldsData.restoration.flows) {
    ctx.strokeStyle = '#55cc55';

    fieldsData.restoration.flows.forEach(f => {
      ctx.beginPath();
      ctx.moveTo(f.from.x, f.from.y);
      ctx.lineTo(f.to.x, f.to.y);
      ctx.stroke();
    });
  }

  // Example: draw continuity or curvature vectors
  // (depends on your JSON structure)
});

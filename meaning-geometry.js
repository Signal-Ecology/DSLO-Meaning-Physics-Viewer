// loader.js must expose window.Engine
async function loadFields() {
  await Engine.loadFields();
  return Engine.fields;
}

const canvas = document.getElementById('geom-canvas');
const ctx = canvas.getContext('2d');

// Canonical DSLO palette (shared with meaning-geometry.html)
const COLORS = {
  drift: "#ff6666",
  continuity: "#66aaff",
  curvature: "#ffcc66",
  collapse: "#cc66ff",
  restoration: "#66cc66",
  susceptibility: "#ff99bb"
};

// Structured DSLO geometry — six field nodes
const fields = [
  { name: 'Drift', x: 120, y: 220, color: COLORS.drift },
  { name: 'Continuity', x: 260, y: 140, color: COLORS.continuity },
  { name: 'Curvature', x: 400, y: 220, color: COLORS.curvature },
  { name: 'Collapse', x: 540, y: 140, color: COLORS.collapse },
  { name: 'Restoration', x: 680, y: 220, color: COLORS.restoration },
  { name: 'Susceptibility', x: 820, y: 140, color: COLORS.susceptibility }
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

  // Drift vectors
  if (fieldsData.drift && fieldsData.drift.vectors) {
    ctx.strokeStyle = COLORS.drift;
    ctx.lineWidth = 1;

    fieldsData.drift.vectors.forEach(v => {
      ctx.beginPath();
      ctx.moveTo(v.x1, v.y1);
      ctx.lineTo(v.x2, v.y2);
      ctx.stroke();
    });
  }

  // Susceptibility windows
  if (fieldsData.susceptibility && fieldsData.susceptibility.windows) {
    ctx.fillStyle = COLORS.susceptibility + "40"; // 25% alpha

    fieldsData.susceptibility.windows.forEach(w => {
      ctx.beginPath();
      ctx.rect(w.x, w.y, w.width, w.height);
      ctx.fill();
    });
  }

  // Collapse boundaries
  if (fieldsData.collapse && fieldsData.collapse.boundaries) {
    ctx.strokeStyle = COLORS.collapse;
    ctx.setLineDash([4, 4]);

    fieldsData.collapse.boundaries.forEach(b => {
      ctx.beginPath();
      ctx.rect(b.x, b.y, b.width, b.height);
      ctx.stroke();
    });

    ctx.setLineDash([]);
  }

  // Restoration flows
  if (fieldsData.restoration && fieldsData.restoration.flows) {
    ctx.strokeStyle = COLORS.restoration;

    fieldsData.restoration.flows.forEach(f => {
      ctx.beginPath();
      ctx.moveTo(f.from.x, f.from.y);
      ctx.lineTo(f.to.x, f.to.y);
      ctx.stroke();
    });
  }

});

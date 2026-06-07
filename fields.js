// Load all DSLO field JSON files using the shared Engine loader
async function loadFields() {
  await Engine.loadFields();
  return Engine.fields;
}

loadFields().then(fields => {
  const root = document.getElementById('field-root');

  // Get field names (drift, continuity, curvature, collapse, restoration, susceptibility)
  const names = Object.keys(fields);

  // Build UI
  root.innerHTML = `
    <h2>Available DSLO Fields</h2>
    <ul>
      ${names.map(n => `<li><button data-field="${n}">${n}</button></li>`).join('')}
    </ul>
    <pre id="field-details" style="padding: 12px; background: #f7f7f7; border: 1px solid #ccc;"></pre>
  `;

  // Wire up click handlers
  document.querySelectorAll('button[data-field]').forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.field;
      const details = fields[name];

      document.getElementById('field-details').innerText =
        JSON.stringify(details, null, 2);
    };
  });
});

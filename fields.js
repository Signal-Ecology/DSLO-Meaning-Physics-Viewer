async function loadFields() {
  await Engine.loadFields();
  return Engine.fields;
}

loadFields().then(fields => {
  const root = document.getElementById('field-root');

  const names = Object.keys(fields);

  root.innerHTML = `
    <h2>Available DSLO Fields</h2>
    <ul>
      ${names.map(n => `<li><button data-field="${n}">${n}</button></li>`).join('')}
    </ul>
    <pre id="field-details" style="padding: 12px; background: #f7f7f7; border: 1px solid #ccc;"></pre>
  `;

  document.querySelectorAll('button[data-field]').forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.field;
      document.getElementById('field-details').innerText =
        JSON.stringify(fields[name], null, 2);
    };
  });
});


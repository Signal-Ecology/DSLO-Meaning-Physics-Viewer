class Engine {
  static async loadJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.status}`);
    }
    return await response.json();
  }

  static async loadFields() {
    const base = "https://signal-ecology.github.io/DSLO-Meaning-Physics-Viewer";

    const schemaPaths = {
      drift: `${base}/schemas/DriftField.schema.json`,
      continuity: `${base}/schemas/ContinuityField.schema.json`,
      curvature: `${base}/schemas/CurvatureField.schema.json`,
      collapse: `${base}/schemas/CollapseBoundaries.schema.json`,
      "restoration-flows": `${base}/schemas/RestorationFlows.schema.json`,
      susceptibility: `${base}/schemas/SusceptibilityWindows.schema.json`
    };

    const fieldPaths = {
      drift: `${base}/fields/DriftField.json`,
      continuity: `${base}/fields/ContinuityField.json`,
      curvature: `${base}/fields/CurvatureField.json`,
      collapse: `${base}/fields/CollapseBoundaries.json`,
      "restoration-flows": `${base}/fields/RestorationFlows.json`,
      susceptibility: `${base}/fields/SusceptibilityWindows.json`
    };

    const schemas = {};
    const fields = {};

    // Load schemas
    for (const key of Object.keys(schemaPaths)) {
      try {
        schemas[key] = await this.loadJSON(schemaPaths[key]);
        console.log(`Loaded schema: ${key}`);
      } catch (err) {
        console.error(`Schema load failed for ${key}:`, err);
      }
    }

    // Load fields
    for (const key of Object.keys(fieldPaths)) {
      try {
        fields[key] = await this.loadJSON(fieldPaths[key]);
        console.log(`Loaded field: ${key}`);
      } catch (err) {
        console.error(`Field load failed for ${key}:`, err);
      }
    }

    return { schemas, fields };
  }
}

window.Engine = Engine;

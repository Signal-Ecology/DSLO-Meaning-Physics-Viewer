Meaning Physics Engine: v0.1
DSLO Semantic Substrate: v0.5
Discipline: Meaning Physics / Signal Ecology
Field: DSLO Semantic Substrate
Architecture: Deterministic, Execution‑Free, Non‑Generative, Non‑Probabilistic
Scientific Anchor: DOI 10.5281/zenodo.21083055  
Viewer Identity: Public‑Layer Geometry Instrument


DSLO‑Meaning‑Physics‑Viewer
Interactive public viewer for DSLO Meaning Physics.

Overview
The DSLO‑Meaning‑Physics‑Viewer is the public, deterministic visualization surface for DSLO Meaning Physics.
Where the DSLO Meaning Physics Engine provides the deterministic field API, the Viewer provides the interactive geometry layer — a way to see drift, continuity, curvature, collapse boundaries, restoration flows, and susceptibility windows rendered as inspectable semantic geometry.

The Viewer performs no inference, no semantic generation, and no substrate modification.
It is a viewer, a scientific instrument for public‑layer inspection of DSLO meaning‑physics fields.

Purpose
The Viewer enables:

deterministic loading of DSLO meaning‑physics fields

public‑safe visualization of semantic geometry

interactive inspection of field identity and structure

debug‑panel access to raw field data

cross‑domain scientific communication through visual instrumentation

It is designed for:

meaning‑physics demonstrations

research visualization

pedagogy and scientific explanation

deterministic meaning‑system instrumentation

Architecture
Field Integration Layer
The Viewer loads all six DSLO meaning‑physics fields through the Meaning Physics Engine:

Drift

Continuity

Curvature

Collapse Boundaries

Restoration Flows

Susceptibility Windows

All fields are deterministic, invariant‑anchored, and schema‑validated.

Engine Interface Layer
The Viewer uses the Engine’s stable API:

Engine.getDrift()

Engine.getContinuity()

Engine.getCurvature()

Engine.getCollapseBoundaries()

Engine.getRestorationFlows()

Engine.getSusceptibilityWindows()

The interface is execution‑free, side‑effect‑free, and deterministic.

Visualization Layer (meaning-geometry.html)
The Meaning Geometry Map provides:

geometry projection of meaning‑physics fields

node rendering for field structures

interactive panels for field identity

debug console for deterministic field inspection

Future versions will include:

drift vector fields

continuity gradients

curvature deformation overlays

collapse boundary shading

restoration flow arrows

susceptibility heatmaps

Field Summary
Drift
Directional semantic drift across the manifold.

Continuity
Identity stability and trajectory coherence.

Curvature
Non‑linear deformation of meaning geometry.

Collapse Boundaries
Regions where semantic collapse occurs.

Restoration Flows
Invariant‑anchored flows returning meaning to stable basins.

Susceptibility Windows
Regions where small perturbations produce large semantic changes.

Relationship to DSLO Meaning Physics Engine
The Viewer:

reads DSLO fields

renders DSLO geometry

exposes DSLO physics visually

It does not:

modify fields

generate meaning

execute transformations

alter substrate logic

It is strictly a viewer, not a substrate or engine.

Status
v0.1 is a stable, deterministic, schema‑validated public demonstrator.

License
See license.json in the DSLO substrate for licensing details.

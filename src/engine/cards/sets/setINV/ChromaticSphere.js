"use strict";
const Constants = require ("../../../Constants");
const ChromaticSphereBase = require("../setMRD/ChromaticSphere");

class ChromaticSphere extends ChromaticSphereBase {
  constructor (game) {
    super(game, "Chromatic Sphere", "Invasion", "INV");
  }
}

module.exports = ChromaticSphere;

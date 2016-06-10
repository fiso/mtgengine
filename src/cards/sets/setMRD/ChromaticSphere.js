"use strict";
const Constants = require ("../../../Constants");
const ChromaticSphereBase = require("../setINV/ChromaticSphere");

class ChromaticSphere extends ChromaticSphereBase {
  constructor (game) {
    super(game, "Chromatic Sphere", "Mirrodin", "MRD");
  }
}

module.exports = ChromaticSphere;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChromaticSphereBase = require("../setINV/ChromaticSphere.js");

class ChromaticSphere extends ChromaticSphereBase {
  constructor(game) {
    super(game, "Chromatic Sphere", "Mirrodin", "MRD");
  }
}

module.exports = ChromaticSphere;

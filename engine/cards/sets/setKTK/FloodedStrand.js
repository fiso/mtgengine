"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodedStrandBase = require("../setpJGP/FloodedStrand.js");

class FloodedStrand extends FloodedStrandBase {
  constructor(game) {
    super(game, "Flooded Strand", "Khans of Tarkir", "KTK");
  }
}

module.exports = FloodedStrand;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlindingBeamBase = require("../setDDF/BlindingBeam.js");

class BlindingBeam extends BlindingBeamBase {
  constructor(game) {
    super(game, "Blinding Beam", "Mirrodin", "MRD");
  }
}

module.exports = BlindingBeam;

"use strict";
const Constants = require ("../../../Constants");
const BlindingBeamBase = require("../setDDF/BlindingBeam");

class BlindingBeam extends BlindingBeamBase {
  constructor (game) {
    super(game, "Blinding Beam", "Mirrodin", "MRD");
  }
}

module.exports = BlindingBeam;

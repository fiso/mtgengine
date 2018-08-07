"use strict";
const Constants = require ("../../../Constants");
const BlindingBeamBase = require("../setMMA/BlindingBeam");

class BlindingBeam extends BlindingBeamBase {
  constructor (game) {
    super(game, "Blinding Beam", "Mirrodin", "MRD");
  }
}

module.exports = BlindingBeam;

"use strict";
const Constants = require ("../../../Constants");
const ReconstructionBase = require("../setATQ/Reconstruction");

class Reconstruction extends ReconstructionBase {
  constructor (game) {
    super(game, "Reconstruction", "Masters Edition IV", "ME4");
  }
}

module.exports = Reconstruction;

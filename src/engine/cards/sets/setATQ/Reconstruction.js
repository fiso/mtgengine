"use strict";
const Constants = require ("../../../Constants");
const ReconstructionBase = require("../setME4/Reconstruction");

class Reconstruction extends ReconstructionBase {
  constructor (game) {
    super(game, "Reconstruction", "Antiquities", "ATQ");
  }
}

module.exports = Reconstruction;

"use strict";
const Constants = require ("../../../Constants");
const ReconstructionBase = require("../setATQ/Reconstruction");

class Reconstruction extends ReconstructionBase {
  constructor (game) {
    super(game, "Reconstruction", "Revised Edition", "3ED");
  }
}

module.exports = Reconstruction;

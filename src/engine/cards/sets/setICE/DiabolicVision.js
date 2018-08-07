"use strict";
const Constants = require ("../../../Constants");
const DiabolicVisionBase = require("../setME2/DiabolicVision");

class DiabolicVision extends DiabolicVisionBase {
  constructor (game) {
    super(game, "Diabolic Vision", "Ice Age", "ICE");
  }
}

module.exports = DiabolicVision;

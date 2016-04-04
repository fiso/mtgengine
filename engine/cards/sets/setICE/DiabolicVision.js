"use strict";
const Constants = require ("../../../Constants");
const DiabolicVisionBase = require("../setBTD/DiabolicVision");

class DiabolicVision extends DiabolicVisionBase {
  constructor(game) {
    super(game, "Diabolic Vision", "Ice Age", "ICE");
  }
}

module.exports = DiabolicVision;

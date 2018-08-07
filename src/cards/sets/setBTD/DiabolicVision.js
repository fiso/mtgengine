"use strict";
const Constants = require ("../../../Constants");
const DiabolicVisionBase = require("../setME2/DiabolicVision");

class DiabolicVision extends DiabolicVisionBase {
  constructor (game) {
    super(game, "Diabolic Vision", "Beatdown Box Set", "BTD");
  }
}

module.exports = DiabolicVision;

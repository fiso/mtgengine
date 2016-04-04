"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiabolicVisionBase = require("../setBTD/DiabolicVision.js");

class DiabolicVision extends DiabolicVisionBase {
  constructor(game) {
    super(game, "Diabolic Vision", "Ice Age", "ICE");
  }
}

module.exports = DiabolicVision;

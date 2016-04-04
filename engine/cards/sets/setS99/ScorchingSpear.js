"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScorchingSpearBase = require("../setPOR/ScorchingSpear.js");

class ScorchingSpear extends ScorchingSpearBase {
  constructor(game) {
    super(game, "Scorching Spear", "Starter 1999", "S99");
  }
}

module.exports = ScorchingSpear;

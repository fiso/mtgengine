"use strict";
const Constants = require ("../../../Constants");
const ScorchingSpearBase = require("../setPOR/ScorchingSpear");

class ScorchingSpear extends ScorchingSpearBase {
  constructor (game) {
    super(game, "Scorching Spear", "Starter 1999", "S99");
  }
}

module.exports = ScorchingSpear;

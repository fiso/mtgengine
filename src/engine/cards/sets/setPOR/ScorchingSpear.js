"use strict";
const Constants = require ("../../../Constants");
const ScorchingSpearBase = require("../setS99/ScorchingSpear");

class ScorchingSpear extends ScorchingSpearBase {
  constructor (game) {
    super(game, "Scorching Spear", "Portal", "POR");
  }
}

module.exports = ScorchingSpear;

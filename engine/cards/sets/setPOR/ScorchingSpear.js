"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScorchingSpear extends Card {
  constructor(game) {
    super(game, "Scorching Spear", "Portal", "POR");
  }
}

module.exports = ScorchingSpear;

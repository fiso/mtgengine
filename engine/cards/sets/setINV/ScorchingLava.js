"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScorchingLava extends Card {
  constructor(game) {
    super(game, "Scorching Lava", "Invasion", "INV");
  }
}

module.exports = ScorchingLava;

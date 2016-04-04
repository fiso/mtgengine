"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScorchingMissile extends Card {
  constructor(game) {
    super(game, "Scorching Missile", "Odyssey", "ODY");
  }
}

module.exports = ScorchingMissile;

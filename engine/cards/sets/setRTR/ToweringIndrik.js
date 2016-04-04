"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToweringIndrik extends Card {
  constructor(game) {
    super(game, "Towering Indrik", "Return to Ravnica", "RTR");
  }
}

module.exports = ToweringIndrik;

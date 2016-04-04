"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonScales extends Card {
  constructor(game) {
    super(game, "Dragon Scales", "Scourge", "SCG");
  }
}

module.exports = DragonScales;

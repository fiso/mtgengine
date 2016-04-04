"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonHatchling extends Card {
  constructor(game) {
    super(game, "Dragon Hatchling", "Magic 2013", "M13");
  }
}

module.exports = DragonHatchling;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonBreath extends Card {
  constructor(game) {
    super(game, "Dragon Breath", "Archenemy", "ARC");
  }
}

module.exports = DragonBreath;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerPlay extends Card {
  constructor(game) {
    super(game, "Power Play", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PowerPlay;

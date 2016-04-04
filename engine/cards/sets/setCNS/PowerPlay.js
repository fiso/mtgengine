"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerPlay extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Play", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PowerPlay;

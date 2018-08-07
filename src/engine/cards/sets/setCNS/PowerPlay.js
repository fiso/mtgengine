"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerPlay extends UnimplementedCard {
  constructor (game) {
    super(game, "Power Play", "Conspiracy", "CNS");
  }
}

module.exports = PowerPlay;

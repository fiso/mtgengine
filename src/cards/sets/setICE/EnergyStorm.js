"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Storm", "Ice Age", "ICE");
  }
}

module.exports = EnergyStorm;

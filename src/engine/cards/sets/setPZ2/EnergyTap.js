"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyTap extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Tap", "You Make the Cube", "PZ2");
  }
}

module.exports = EnergyTap;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Paladin", "Tempest Remastered", "TPR");
  }
}

module.exports = ChargingPaladin;

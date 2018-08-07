"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YawgmothsEdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Yawgmoth's Edict", "Seventh Edition", "7ED");
  }
}

module.exports = YawgmothsEdict;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YawgmothsEdict extends Card {
  constructor(game) {
    super(game, "Yawgmoth's Edict", "Seventh Edition", "7ED");
  }
}

module.exports = YawgmothsEdict;

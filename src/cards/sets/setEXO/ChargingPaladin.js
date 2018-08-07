"use strict";
const Constants = require ("../../../Constants");
const ChargingPaladinBase = require("../setTPR/ChargingPaladin");

class ChargingPaladin extends ChargingPaladinBase {
  constructor (game) {
    super(game, "Charging Paladin", "Exodus", "EXO");
  }
}

module.exports = ChargingPaladin;

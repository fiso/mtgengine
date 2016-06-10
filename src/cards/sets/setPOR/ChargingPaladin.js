"use strict";
const Constants = require ("../../../Constants");
const ChargingPaladinBase = require("../setDD3_DVD/ChargingPaladin");

class ChargingPaladin extends ChargingPaladinBase {
  constructor (game) {
    super(game, "Charging Paladin", "Portal", "POR");
  }
}

module.exports = ChargingPaladin;

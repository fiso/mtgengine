"use strict";
const Constants = require ("../../../Constants");
const EnergyTapBase = require("../set4ED/EnergyTap");

class EnergyTap extends EnergyTapBase {
  constructor(game) {
    super(game, "Energy Tap", "Legends", "LEG");
  }
}

module.exports = EnergyTap;

"use strict";
const Constants = require ("../../../Constants");
const EnergyStormBase = require("../setICE/EnergyStorm");

class EnergyStorm extends EnergyStormBase {
  constructor(game) {
    super(game, "Energy Storm", "Masters Edition II", "ME2");
  }
}

module.exports = EnergyStorm;

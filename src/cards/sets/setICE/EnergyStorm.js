"use strict";
const Constants = require ("../../../Constants");
const EnergyStormBase = require("../setME2/EnergyStorm");

class EnergyStorm extends EnergyStormBase {
  constructor (game) {
    super(game, "Energy Storm", "Ice Age", "ICE");
  }
}

module.exports = EnergyStorm;

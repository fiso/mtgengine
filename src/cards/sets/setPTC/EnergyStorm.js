"use strict";
const Constants = require ("../../../Constants");
const EnergyStormBase = require("../setME2/EnergyStorm");

class EnergyStorm extends EnergyStormBase {
  constructor (game) {
    super(game, "Energy Storm", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = EnergyStorm;

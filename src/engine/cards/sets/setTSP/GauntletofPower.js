"use strict";
const Constants = require ("../../../Constants");
const GauntletofPowerBase = require("../setMPS/GauntletofPower");

class GauntletofPower extends GauntletofPowerBase {
  constructor (game) {
    super(game, "Gauntlet of Power", "Time Spiral", "TSP");
  }
}

module.exports = GauntletofPower;

"use strict";
const Constants = require ("../../../Constants");
const HailStormBase = require("../setALL/HailStorm");

class HailStorm extends HailStormBase {
  constructor(game) {
    super(game, "Hail Storm", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = HailStorm;

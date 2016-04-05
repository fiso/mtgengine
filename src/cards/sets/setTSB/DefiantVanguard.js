"use strict";
const Constants = require ("../../../Constants");
const DefiantVanguardBase = require("../setNMS/DefiantVanguard");

class DefiantVanguard extends DefiantVanguardBase {
  constructor(game) {
    super(game, "Defiant Vanguard", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = DefiantVanguard;

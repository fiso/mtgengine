"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DefiantVanguardBase = require("../setNMS/DefiantVanguard.js");

class DefiantVanguard extends DefiantVanguardBase {
  constructor(game) {
    super(game, "Defiant Vanguard", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = DefiantVanguard;

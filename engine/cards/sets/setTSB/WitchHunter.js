"use strict";
const Constants = require ("../../../Constants");
const WitchHunterBase = require("../setCHR/WitchHunter");

class WitchHunter extends WitchHunterBase {
  constructor(game) {
    super(game, "Witch Hunter", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = WitchHunter;

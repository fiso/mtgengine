"use strict";
const Constants = require ("../../../Constants");
const DefiantVanguardBase = require("../setTSB/DefiantVanguard");

class DefiantVanguard extends DefiantVanguardBase {
  constructor (game) {
    super(game, "Defiant Vanguard", "Nemesis", "NEM");
  }
}

module.exports = DefiantVanguard;

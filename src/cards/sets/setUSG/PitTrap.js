"use strict";
const Constants = require ("../../../Constants");
const PitTrapBase = require("../setICE/PitTrap");

class PitTrap extends PitTrapBase {
  constructor (game) {
    super(game, "Pit Trap", "Urza's Saga", "USG");
  }
}

module.exports = PitTrap;

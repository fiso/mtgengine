"use strict";
const Constants = require ("../../../Constants");
const PitfallTrapBase = require("../setMM3/PitfallTrap");

class PitfallTrap extends PitfallTrapBase {
  constructor (game) {
    super(game, "Pitfall Trap", "Zendikar", "ZEN");
  }
}

module.exports = PitfallTrap;

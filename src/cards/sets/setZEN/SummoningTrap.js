"use strict";
const Constants = require ("../../../Constants");
const SummoningTrapBase = require("../setMM3/SummoningTrap");

class SummoningTrap extends SummoningTrapBase {
  constructor (game) {
    super(game, "Summoning Trap", "Zendikar", "ZEN");
  }
}

module.exports = SummoningTrap;

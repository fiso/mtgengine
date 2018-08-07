"use strict";
const Constants = require ("../../../Constants");
const MortalCombatBase = require("../set10E/MortalCombat");

class MortalCombat extends MortalCombatBase {
  constructor (game) {
    super(game, "Mortal Combat", "Torment", "TOR");
  }
}

module.exports = MortalCombat;

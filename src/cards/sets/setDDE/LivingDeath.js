"use strict";
const Constants = require ("../../../Constants");
const LivingDeathBase = require("../setBRB/LivingDeath");

class LivingDeath extends LivingDeathBase {
  constructor (game) {
    super(game, "Living Death", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = LivingDeath;

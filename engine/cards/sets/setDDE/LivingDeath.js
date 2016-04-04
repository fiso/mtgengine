"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingDeathBase = require("../setBRB/LivingDeath.js");

class LivingDeath extends LivingDeathBase {
  constructor(game) {
    super(game, "Living Death", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = LivingDeath;

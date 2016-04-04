"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingDeath extends Card {
  constructor(game) {
    super(game, "Living Death", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LivingDeath;

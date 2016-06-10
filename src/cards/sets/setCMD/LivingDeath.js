"use strict";
const Constants = require ("../../../Constants");
const LivingDeathBase = require("../setBRB/LivingDeath");

class LivingDeath extends LivingDeathBase {
  constructor (game) {
    super(game, "Living Death", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = LivingDeath;

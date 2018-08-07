"use strict";
const Constants = require ("../../../Constants");
const LivingDeathBase = require("../setCM2/LivingDeath");

class LivingDeath extends LivingDeathBase {
  constructor (game) {
    super(game, "Living Death", "Vintage Masters", "VMA");
  }
}

module.exports = LivingDeath;

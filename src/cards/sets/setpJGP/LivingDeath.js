"use strict";
const Constants = require ("../../../Constants");
const LivingDeathBase = require("../setBRB/LivingDeath");

class LivingDeath extends LivingDeathBase {
  constructor (game) {
    super(game, "Living Death", "Judge Gift Program", "pJGP");
  }
}

module.exports = LivingDeath;

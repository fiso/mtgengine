"use strict";
const Constants = require ("../../../Constants");
const LivingDeathBase = require("../setBRB/LivingDeath");

class LivingDeath extends LivingDeathBase {
  constructor (game) {
    super(game, "Living Death", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = LivingDeath;

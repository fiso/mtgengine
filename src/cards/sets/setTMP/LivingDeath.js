"use strict";
const Constants = require ("../../../Constants");
const LivingDeathBase = require("../setBRB/LivingDeath");

class LivingDeath extends LivingDeathBase {
  constructor(game) {
    super(game, "Living Death", "Tempest", "TMP");
  }
}

module.exports = LivingDeath;

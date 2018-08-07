"use strict";
const Constants = require ("../../../Constants");
const SilumgartheDriftingDeathBase = require("../setC17/SilumgartheDriftingDeath");

class SilumgartheDriftingDeath extends SilumgartheDriftingDeathBase {
  constructor (game) {
    super(game, "Silumgar, the Drifting Death", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = SilumgartheDriftingDeath;

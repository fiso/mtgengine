"use strict";
const Constants = require ("../../../Constants");
const JayasImmolatingInfernoBase = require("../setDOM/JayasImmolatingInferno");

class JayasImmolatingInferno extends JayasImmolatingInfernoBase {
  constructor (game) {
    super(game, "Jaya's Immolating Inferno", "Dominaria Promos", "PDOM");
  }
}

module.exports = JayasImmolatingInferno;

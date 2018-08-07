"use strict";
const Constants = require ("../../../Constants");
const SanctifierofSoulsBase = require("../setEMN/SanctifierofSouls");

class SanctifierofSouls extends SanctifierofSoulsBase {
  constructor (game) {
    super(game, "Sanctifier of Souls", "Magic Online Promos", "PRM");
  }
}

module.exports = SanctifierofSouls;

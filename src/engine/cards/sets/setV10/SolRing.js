"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setC18/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "From the Vault: Relics", "V10");
  }
}

module.exports = SolRing;

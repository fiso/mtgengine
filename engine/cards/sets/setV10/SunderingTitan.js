"use strict";
const Constants = require ("../../../Constants");
const SunderingTitanBase = require("../setARC/SunderingTitan");

class SunderingTitan extends SunderingTitanBase {
  constructor(game) {
    super(game, "Sundering Titan", "From the Vault: Relics", "V10");
  }
}

module.exports = SunderingTitan;

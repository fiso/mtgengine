"use strict";
const Constants = require ("../../../Constants");
const SacredFoundryBase = require("../setEXP/SacredFoundry");

class SacredFoundry extends SacredFoundryBase {
  constructor (game) {
    super(game, "Sacred Foundry", "Gatecrash", "GTC");
  }
}

module.exports = SacredFoundry;

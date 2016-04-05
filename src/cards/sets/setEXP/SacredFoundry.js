"use strict";
const Constants = require ("../../../Constants");
const SacredFoundryBase = require("../setGTC/SacredFoundry");

class SacredFoundry extends SacredFoundryBase {
  constructor(game) {
    super(game, "Sacred Foundry", "Zendikar Expedition", "EXP");
  }
}

module.exports = SacredFoundry;

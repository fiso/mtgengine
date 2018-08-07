"use strict";
const Constants = require ("../../../Constants");
const ChaoticAetherBase = require("../setPCA/ChaoticAether");

class ChaoticAether extends ChaoticAetherBase {
  constructor (game) {
    super(game, "Chaotic Aether", "Planechase 2012", "PC2");
  }
}

module.exports = ChaoticAether;

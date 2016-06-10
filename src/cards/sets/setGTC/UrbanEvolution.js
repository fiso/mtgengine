"use strict";
const Constants = require ("../../../Constants");
const UrbanEvolutionBase = require("../setDDO/UrbanEvolution");

class UrbanEvolution extends UrbanEvolutionBase {
  constructor (game) {
    super(game, "Urban Evolution", "Gatecrash", "GTC");
  }
}

module.exports = UrbanEvolution;

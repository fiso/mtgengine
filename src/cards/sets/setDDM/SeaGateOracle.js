"use strict";
const Constants = require ("../../../Constants");
const SeaGateOracleBase = require("../setC14/SeaGateOracle");

class SeaGateOracle extends SeaGateOracleBase {
  constructor(game) {
    super(game, "Sea Gate Oracle", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SeaGateOracle;

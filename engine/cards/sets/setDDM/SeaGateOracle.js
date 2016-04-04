"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaGateOracleBase = require("../setC14/SeaGateOracle.js");

class SeaGateOracle extends SeaGateOracleBase {
  constructor(game) {
    super(game, "Sea Gate Oracle", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SeaGateOracle;

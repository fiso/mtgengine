"use strict";
const Constants = require ("../../../Constants");
const SeaGateOracleBase = require("../setC14/SeaGateOracle");

class SeaGateOracle extends SeaGateOracleBase {
  constructor (game) {
    super(game, "Sea Gate Oracle", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SeaGateOracle;

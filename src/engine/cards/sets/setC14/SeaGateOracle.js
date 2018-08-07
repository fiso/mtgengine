"use strict";
const Constants = require ("../../../Constants");
const SeaGateOracleBase = require("../setC17/SeaGateOracle");

class SeaGateOracle extends SeaGateOracleBase {
  constructor (game) {
    super(game, "Sea Gate Oracle", "Commander 2014", "C14");
  }
}

module.exports = SeaGateOracle;

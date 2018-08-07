"use strict";
const Constants = require ("../../../Constants");
const SeaGateOracleBase = require("../setC17/SeaGateOracle");

class SeaGateOracle extends SeaGateOracleBase {
  constructor (game) {
    super(game, "Sea Gate Oracle", "Modern Masters 2017", "MM3");
  }
}

module.exports = SeaGateOracle;

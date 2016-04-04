"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaGateOracleBase = require("../setC14/SeaGateOracle.js");

class SeaGateOracle extends SeaGateOracleBase {
  constructor(game) {
    super(game, "Sea Gate Oracle", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SeaGateOracle;

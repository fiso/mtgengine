"use strict";
const Constants = require ("../../../Constants");
const CoilingOracleBase = require("../setMM3/CoilingOracle");

class CoilingOracle extends CoilingOracleBase {
  constructor (game) {
    super(game, "Coiling Oracle", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CoilingOracle;

"use strict";
const Constants = require ("../../../Constants");
const CoilingOracleBase = require("../setpARL/CoilingOracle");

class CoilingOracle extends CoilingOracleBase {
  constructor(game) {
    super(game, "Coiling Oracle", "Commander 2015", "C15");
  }
}

module.exports = CoilingOracle;

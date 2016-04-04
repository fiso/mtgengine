"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoilingOracleBase = require("../setpARL/CoilingOracle.js");

class CoilingOracle extends CoilingOracleBase {
  constructor(game) {
    super(game, "Coiling Oracle", "Dissension", "DIS");
  }
}

module.exports = CoilingOracle;

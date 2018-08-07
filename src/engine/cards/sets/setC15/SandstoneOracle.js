"use strict";
const Constants = require ("../../../Constants");
const SandstoneOracleBase = require("../setCM2/SandstoneOracle");

class SandstoneOracle extends SandstoneOracleBase {
  constructor (game) {
    super(game, "Sandstone Oracle", "Commander 2015", "C15");
  }
}

module.exports = SandstoneOracle;

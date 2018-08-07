"use strict";
const Constants = require ("../../../Constants");
const SandstoneOracleBase = require("../setCM2/SandstoneOracle");

class SandstoneOracle extends SandstoneOracleBase {
  constructor (game) {
    super(game, "Sandstone Oracle", "Legendary Cube", "PZ1");
  }
}

module.exports = SandstoneOracle;

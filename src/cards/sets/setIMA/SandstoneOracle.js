"use strict";
const Constants = require ("../../../Constants");
const SandstoneOracleBase = require("../setCM2/SandstoneOracle");

class SandstoneOracle extends SandstoneOracleBase {
  constructor (game) {
    super(game, "Sandstone Oracle", "Iconic Masters", "IMA");
  }
}

module.exports = SandstoneOracle;

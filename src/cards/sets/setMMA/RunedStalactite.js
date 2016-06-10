"use strict";
const Constants = require ("../../../Constants");
const RunedStalactiteBase = require("../setLRW/RunedStalactite");

class RunedStalactite extends RunedStalactiteBase {
  constructor (game) {
    super(game, "Runed Stalactite", "Modern Masters", "MMA");
  }
}

module.exports = RunedStalactite;

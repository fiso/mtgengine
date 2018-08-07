"use strict";
const Constants = require ("../../../Constants");
const RunedStalactiteBase = require("../setMMA/RunedStalactite");

class RunedStalactite extends RunedStalactiteBase {
  constructor (game) {
    super(game, "Runed Stalactite", "Lorwyn", "LRW");
  }
}

module.exports = RunedStalactite;

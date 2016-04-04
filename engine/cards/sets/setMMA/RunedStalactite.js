"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RunedStalactiteBase = require("../setLRW/RunedStalactite.js");

class RunedStalactite extends RunedStalactiteBase {
  constructor(game) {
    super(game, "Runed Stalactite", "Modern Masters", "MMA");
  }
}

module.exports = RunedStalactite;

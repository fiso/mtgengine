"use strict";
const Constants = require ("../../../Constants");
const ChaosWarpBase = require("../setC14/ChaosWarp");

class ChaosWarp extends ChaosWarpBase {
  constructor(game) {
    super(game, "Chaos Warp", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChaosWarp;

"use strict";
const Constants = require ("../../../Constants");
const ChaosWarpBase = require("../setC18/ChaosWarp");

class ChaosWarp extends ChaosWarpBase {
  constructor (game) {
    super(game, "Chaos Warp", "Legendary Cube", "PZ1");
  }
}

module.exports = ChaosWarp;

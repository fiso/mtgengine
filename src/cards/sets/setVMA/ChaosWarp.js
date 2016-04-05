"use strict";
const Constants = require ("../../../Constants");
const ChaosWarpBase = require("../setC14/ChaosWarp");

class ChaosWarp extends ChaosWarpBase {
  constructor(game) {
    super(game, "Chaos Warp", "Vintage Masters", "VMA");
  }
}

module.exports = ChaosWarp;

"use strict";
const Constants = require ("../../../Constants");
const ChaosWarpBase = require("../setC18/ChaosWarp");

class ChaosWarp extends ChaosWarpBase {
  constructor (game) {
    super(game, "Chaos Warp", "Commander 2014", "C14");
  }
}

module.exports = ChaosWarp;

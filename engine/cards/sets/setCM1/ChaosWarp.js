"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaosWarpBase = require("../setC14/ChaosWarp.js");

class ChaosWarp extends ChaosWarpBase {
  constructor(game) {
    super(game, "Chaos Warp", "Commander's Arsenal", "CM1");
  }
}

module.exports = ChaosWarp;

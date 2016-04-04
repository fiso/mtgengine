"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaosWarpBase = require("../setC14/ChaosWarp.js");

class ChaosWarp extends ChaosWarpBase {
  constructor(game) {
    super(game, "Chaos Warp", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChaosWarp;

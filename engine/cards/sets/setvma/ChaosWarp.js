"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaosWarpBase = require("../setC14/ChaosWarp.js");

class ChaosWarp extends ChaosWarpBase {
  constructor(game) {
    super(game, "Chaos Warp", "Vintage Masters", "VMA");
  }
}

module.exports = ChaosWarp;

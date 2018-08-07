"use strict";
const Constants = require ("../../../Constants");
const BloodlineNecromancerBase = require("../setC17/BloodlineNecromancer");

class BloodlineNecromancer extends BloodlineNecromancerBase {
  constructor (game) {
    super(game, "Bloodline Necromancer", "You Make the Cube", "PZ2");
  }
}

module.exports = BloodlineNecromancer;

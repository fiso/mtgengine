"use strict";
const Constants = require ("../../../Constants");
const SwordDancerBase = require("../set8ED/SwordDancer");

class SwordDancer extends SwordDancerBase {
  constructor (game) {
    super(game, "Sword Dancer", "Prophecy", "PCY");
  }
}

module.exports = SwordDancer;

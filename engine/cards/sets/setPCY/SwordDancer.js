"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordDancerBase = require("../set8ED/SwordDancer.js");

class SwordDancer extends SwordDancerBase {
  constructor(game) {
    super(game, "Sword Dancer", "Prophecy", "PCY");
  }
}

module.exports = SwordDancer;

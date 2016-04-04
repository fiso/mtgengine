"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MutagenicGrowthBase = require("../setMM2/MutagenicGrowth.js");

class MutagenicGrowth extends MutagenicGrowthBase {
  constructor(game) {
    super(game, "Mutagenic Growth", "New Phyrexia", "NPH");
  }
}

module.exports = MutagenicGrowth;

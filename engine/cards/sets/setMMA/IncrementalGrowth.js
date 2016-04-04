"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IncrementalGrowthBase = require("../setKTK/IncrementalGrowth.js");

class IncrementalGrowth extends IncrementalGrowthBase {
  constructor(game) {
    super(game, "Incremental Growth", "Modern Masters", "MMA");
  }
}

module.exports = IncrementalGrowth;

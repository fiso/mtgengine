"use strict";
const Constants = require ("../../../Constants");
const IncrementalGrowthBase = require("../setKTK/IncrementalGrowth");

class IncrementalGrowth extends IncrementalGrowthBase {
  constructor(game) {
    super(game, "Incremental Growth", "Modern Masters", "MMA");
  }
}

module.exports = IncrementalGrowth;

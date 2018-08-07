"use strict";
const Constants = require ("../../../Constants");
const IncrementalGrowthBase = require("../setW16/IncrementalGrowth");

class IncrementalGrowth extends IncrementalGrowthBase {
  constructor (game) {
    super(game, "Incremental Growth", "Lorwyn", "LRW");
  }
}

module.exports = IncrementalGrowth;

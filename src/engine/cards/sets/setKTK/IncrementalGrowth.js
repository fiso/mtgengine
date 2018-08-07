"use strict";
const Constants = require ("../../../Constants");
const IncrementalGrowthBase = require("../setW16/IncrementalGrowth");

class IncrementalGrowth extends IncrementalGrowthBase {
  constructor (game) {
    super(game, "Incremental Growth", "Khans of Tarkir", "KTK");
  }
}

module.exports = IncrementalGrowth;

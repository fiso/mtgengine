"use strict";
const Constants = require ("../../../Constants");
const IncrementalGrowthBase = require("../setKTK/IncrementalGrowth");

class IncrementalGrowth extends IncrementalGrowthBase {
  constructor (game) {
    super(game, "Incremental Growth", "Welcome Deck 2016", "W16");
  }
}

module.exports = IncrementalGrowth;

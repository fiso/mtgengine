"use strict";
const Constants = require ("../../../Constants");
const OldGrowthDryadsBase = require("../setXLN/OldGrowthDryads");

class OldGrowthDryads extends OldGrowthDryadsBase {
  constructor (game) {
    super(game, "Old-Growth Dryads", "Ixalan Promos", "PXLN");
  }
}

module.exports = OldGrowthDryads;

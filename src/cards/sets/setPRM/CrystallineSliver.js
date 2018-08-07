"use strict";
const Constants = require ("../../../Constants");
const CrystallineSliverBase = require("../setTPR/CrystallineSliver");

class CrystallineSliver extends CrystallineSliverBase {
  constructor (game) {
    super(game, "Crystalline Sliver", "Magic Online Promos", "PRM");
  }
}

module.exports = CrystallineSliver;

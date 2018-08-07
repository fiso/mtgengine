"use strict";
const Constants = require ("../../../Constants");
const CrystallineSliverBase = require("../setTPR/CrystallineSliver");

class CrystallineSliver extends CrystallineSliverBase {
  constructor (game) {
    super(game, "Crystalline Sliver", "Friday Night Magic 2003", "F03");
  }
}

module.exports = CrystallineSliver;

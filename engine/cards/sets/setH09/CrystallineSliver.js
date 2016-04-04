"use strict";
const Constants = require ("../../../Constants");
const CrystallineSliverBase = require("../setpFNM/CrystallineSliver");

class CrystallineSliver extends CrystallineSliverBase {
  constructor(game) {
    super(game, "Crystalline Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = CrystallineSliver;

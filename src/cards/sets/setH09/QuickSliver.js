"use strict";
const Constants = require ("../../../Constants");
const QuickSliverBase = require("../setLGN/QuickSliver");

class QuickSliver extends QuickSliverBase {
  constructor(game) {
    super(game, "Quick Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = QuickSliver;

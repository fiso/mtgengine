"use strict";
const Constants = require ("../../../Constants");
const SpinedSliverBase = require("../setTPR/SpinedSliver");

class SpinedSliver extends SpinedSliverBase {
  constructor (game) {
    super(game, "Spined Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = SpinedSliver;

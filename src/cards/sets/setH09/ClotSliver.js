"use strict";
const Constants = require ("../../../Constants");
const ClotSliverBase = require("../setTPR/ClotSliver");

class ClotSliver extends ClotSliverBase {
  constructor (game) {
    super(game, "Clot Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = ClotSliver;

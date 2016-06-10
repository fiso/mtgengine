"use strict";
const Constants = require ("../../../Constants");
const BroodSliverBase = require("../setLGN/BroodSliver");

class BroodSliver extends BroodSliverBase {
  constructor (game) {
    super(game, "Brood Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = BroodSliver;

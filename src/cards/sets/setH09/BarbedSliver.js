"use strict";
const Constants = require ("../../../Constants");
const BarbedSliverBase = require("../setTPR/BarbedSliver");

class BarbedSliver extends BarbedSliverBase {
  constructor (game) {
    super(game, "Barbed Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = BarbedSliver;

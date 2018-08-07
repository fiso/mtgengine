"use strict";
const Constants = require ("../../../Constants");
const MetallicSliverBase = require("../setTPR/MetallicSliver");

class MetallicSliver extends MetallicSliverBase {
  constructor (game) {
    super(game, "Metallic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = MetallicSliver;

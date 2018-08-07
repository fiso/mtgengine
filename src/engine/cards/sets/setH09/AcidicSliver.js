"use strict";
const Constants = require ("../../../Constants");
const AcidicSliverBase = require("../setTPR/AcidicSliver");

class AcidicSliver extends AcidicSliverBase {
  constructor (game) {
    super(game, "Acidic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = AcidicSliver;

"use strict";
const Constants = require ("../../../Constants");
const ArmorSliverBase = require("../setTPR/ArmorSliver");

class ArmorSliver extends ArmorSliverBase {
  constructor (game) {
    super(game, "Armor Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = ArmorSliver;

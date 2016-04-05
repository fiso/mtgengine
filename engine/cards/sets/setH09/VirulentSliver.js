"use strict";
const Constants = require ("../../../Constants");
const VirulentSliverBase = require("../setFUT/VirulentSliver");

class VirulentSliver extends VirulentSliverBase {
  constructor(game) {
    super(game, "Virulent Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VirulentSliver;

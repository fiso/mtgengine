"use strict";
const Constants = require ("../../../Constants");
const VictualSliverBase = require("../setTPR/VictualSliver");

class VictualSliver extends VictualSliverBase {
  constructor (game) {
    super(game, "Victual Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VictualSliver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BroodSliverBase = require("../setLGN/BroodSliver.js");

class BroodSliver extends BroodSliverBase {
  constructor(game) {
    super(game, "Brood Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = BroodSliver;

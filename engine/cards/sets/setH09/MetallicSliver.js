"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetallicSliver extends Card {
  constructor(game) {
    super(game, "Metallic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = MetallicSliver;

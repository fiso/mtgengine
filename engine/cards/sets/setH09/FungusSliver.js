"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FungusSliver extends Card {
  constructor(game) {
    super(game, "Fungus Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FungusSliver;

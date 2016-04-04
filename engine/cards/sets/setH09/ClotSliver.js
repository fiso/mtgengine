"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClotSliver extends Card {
  constructor(game) {
    super(game, "Clot Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = ClotSliver;

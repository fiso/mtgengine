"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcidicSliver extends Card {
  constructor(game) {
    super(game, "Acidic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = AcidicSliver;

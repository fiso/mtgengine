"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedSliver extends Card {
  constructor(game) {
    super(game, "Barbed Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = BarbedSliver;

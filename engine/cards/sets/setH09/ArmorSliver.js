"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmorSliver extends Card {
  constructor(game) {
    super(game, "Armor Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = ArmorSliver;

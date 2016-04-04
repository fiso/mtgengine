"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VictualSliver extends Card {
  constructor(game) {
    super(game, "Victual Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VictualSliver;

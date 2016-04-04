"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartSliver extends Card {
  constructor(game) {
    super(game, "Heart Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HeartSliver;

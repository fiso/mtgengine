"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HibernationSliver extends Card {
  constructor(game) {
    super(game, "Hibernation Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HibernationSliver;

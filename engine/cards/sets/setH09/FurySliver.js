"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurySliver extends Card {
  constructor(game) {
    super(game, "Fury Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FurySliver;

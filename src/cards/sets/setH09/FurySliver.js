"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurySliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Fury Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FurySliver;

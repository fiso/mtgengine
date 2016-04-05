"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungusSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Fungus Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FungusSliver;

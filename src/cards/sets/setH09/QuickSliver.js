"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuickSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Quick Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = QuickSliver;

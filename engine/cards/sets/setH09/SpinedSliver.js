"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Spined Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = SpinedSliver;

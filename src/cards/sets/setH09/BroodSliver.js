"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Brood Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = BroodSliver;

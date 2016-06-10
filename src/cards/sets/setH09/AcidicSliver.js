"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidicSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Acidic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = AcidicSliver;

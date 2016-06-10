"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetallicSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Metallic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = MetallicSliver;

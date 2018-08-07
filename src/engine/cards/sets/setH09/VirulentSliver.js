"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirulentSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Virulent Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VirulentSliver;

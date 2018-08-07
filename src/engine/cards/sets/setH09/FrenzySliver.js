"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenzySliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzy Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FrenzySliver;

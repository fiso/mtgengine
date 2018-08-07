"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DistantMelody extends UnimplementedCard {
  constructor (game) {
    super(game, "Distant Melody", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = DistantMelody;

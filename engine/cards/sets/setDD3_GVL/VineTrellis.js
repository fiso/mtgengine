"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VineTrellis extends UnimplementedCard {
  constructor(game) {
    super(game, "Vine Trellis", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = VineTrellis;

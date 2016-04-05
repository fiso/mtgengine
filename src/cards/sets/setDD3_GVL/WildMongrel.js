"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildMongrel extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Mongrel", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = WildMongrel;

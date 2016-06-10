"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingWildebeests extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampeding Wildebeests", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = StampedingWildebeests;

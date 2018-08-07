"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingWildebeests extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampeding Wildebeests", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = StampedingWildebeests;

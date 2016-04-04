"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HideousEnd extends UnimplementedCard {
  constructor(game) {
    super(game, "Hideous End", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = HideousEnd;

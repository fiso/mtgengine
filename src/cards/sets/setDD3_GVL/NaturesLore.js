"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesLore extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Lore", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = NaturesLore;

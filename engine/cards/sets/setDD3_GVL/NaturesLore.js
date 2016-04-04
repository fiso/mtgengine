"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesLore extends Card {
  constructor(game) {
    super(game, "Nature's Lore", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = NaturesLore;

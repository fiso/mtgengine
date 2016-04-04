"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildMongrel extends Card {
  constructor(game) {
    super(game, "Wild Mongrel", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = WildMongrel;

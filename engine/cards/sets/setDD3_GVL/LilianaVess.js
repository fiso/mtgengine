"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LilianaVess extends Card {
  constructor(game) {
    super(game, "Liliana Vess", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = LilianaVess;

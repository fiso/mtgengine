"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lignify extends Card {
  constructor(game) {
    super(game, "Lignify", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Lignify;

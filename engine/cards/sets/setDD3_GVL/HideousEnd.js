"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HideousEnd extends Card {
  constructor(game) {
    super(game, "Hideous End", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = HideousEnd;

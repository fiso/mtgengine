"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RudeAwakening extends Card {
  constructor(game) {
    super(game, "Rude Awakening", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = RudeAwakening;

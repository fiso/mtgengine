"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElephantGuide extends Card {
  constructor(game) {
    super(game, "Elephant Guide", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = ElephantGuide;

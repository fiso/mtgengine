"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Enslave extends Card {
  constructor(game) {
    super(game, "Enslave", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Enslave;

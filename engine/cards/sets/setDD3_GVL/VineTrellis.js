"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VineTrellis extends Card {
  constructor(game) {
    super(game, "Vine Trellis", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = VineTrellis;

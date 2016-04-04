"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieMacabre extends Card {
  constructor(game) {
    super(game, "Faerie Macabre", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = FaerieMacabre;

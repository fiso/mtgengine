"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deathgreeter extends Card {
  constructor(game) {
    super(game, "Deathgreeter", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Deathgreeter;

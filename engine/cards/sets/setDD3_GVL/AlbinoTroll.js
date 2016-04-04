"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlbinoTroll extends Card {
  constructor(game) {
    super(game, "Albino Troll", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = AlbinoTroll;

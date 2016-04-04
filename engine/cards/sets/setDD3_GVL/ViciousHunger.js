"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViciousHunger extends Card {
  constructor(game) {
    super(game, "Vicious Hunger", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = ViciousHunger;

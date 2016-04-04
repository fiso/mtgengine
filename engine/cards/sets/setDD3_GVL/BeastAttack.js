"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeastAttack extends Card {
  constructor(game) {
    super(game, "Beast Attack", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = BeastAttack;

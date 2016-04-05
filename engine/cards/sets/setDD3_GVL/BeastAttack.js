"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastAttack extends UnimplementedCard {
  constructor(game) {
    super(game, "Beast Attack", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = BeastAttack;

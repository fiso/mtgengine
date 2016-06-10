"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlbinoTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Albino Troll", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = AlbinoTroll;

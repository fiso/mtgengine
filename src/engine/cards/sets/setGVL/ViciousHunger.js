"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViciousHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Vicious Hunger", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = ViciousHunger;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingBanshee extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Banshee", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = HowlingBanshee;

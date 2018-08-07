"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnholyStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Unholy Strength", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = UnholyStrength;

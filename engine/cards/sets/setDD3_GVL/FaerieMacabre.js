"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieMacabre extends UnimplementedCard {
  constructor(game) {
    super(game, "Faerie Macabre", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = FaerieMacabre;

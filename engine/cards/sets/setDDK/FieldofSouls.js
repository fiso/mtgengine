"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldofSouls extends UnimplementedCard {
  constructor(game) {
    super(game, "Field of Souls", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = FieldofSouls;

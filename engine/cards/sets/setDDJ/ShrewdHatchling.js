"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrewdHatchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Shrewd Hatchling", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ShrewdHatchling;

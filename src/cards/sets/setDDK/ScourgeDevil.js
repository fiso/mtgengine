"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScourgeDevil extends UnimplementedCard {
  constructor (game) {
    super(game, "Scourge Devil", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ScourgeDevil;

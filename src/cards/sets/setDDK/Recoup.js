"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recoup extends UnimplementedCard {
  constructor(game) {
    super(game, "Recoup", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Recoup;

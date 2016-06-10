"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftJustice extends UnimplementedCard {
  constructor (game) {
    super(game, "Swift Justice", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = SwiftJustice;

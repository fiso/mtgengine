"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanOasis extends UnimplementedCard {
  constructor(game) {
    super(game, "Shivan Oasis", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ShivanOasis;

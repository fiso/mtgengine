"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MausoleumGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Mausoleum Guard", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MausoleumGuard;

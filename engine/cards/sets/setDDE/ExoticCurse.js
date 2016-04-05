"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExoticCurse extends UnimplementedCard {
  constructor(game) {
    super(game, "Exotic Curse", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ExoticCurse;

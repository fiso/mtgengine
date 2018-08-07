"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasChosen extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Chosen", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = NissasChosen;

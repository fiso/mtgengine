"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieInvaders extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Invaders", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FaerieInvaders;

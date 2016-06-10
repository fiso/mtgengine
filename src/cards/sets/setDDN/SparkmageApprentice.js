"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkmageApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparkmage Apprentice", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = SparkmageApprentice;

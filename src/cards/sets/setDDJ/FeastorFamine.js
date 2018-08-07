"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeastorFamine extends UnimplementedCard {
  constructor (game) {
    super(game, "Feast or Famine", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = FeastorFamine;

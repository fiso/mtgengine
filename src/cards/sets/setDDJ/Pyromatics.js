"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyromatics extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyromatics", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Pyromatics;

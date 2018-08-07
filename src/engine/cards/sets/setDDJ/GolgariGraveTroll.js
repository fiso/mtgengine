"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariGraveTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Golgari Grave-Troll", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariGraveTroll;

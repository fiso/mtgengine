"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariGermination extends UnimplementedCard {
  constructor (game) {
    super(game, "Golgari Germination", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariGermination;

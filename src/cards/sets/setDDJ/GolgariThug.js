"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariThug extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Thug", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariThug;

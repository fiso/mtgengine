"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameSlash extends UnimplementedCard {
  constructor(game) {
    super(game, "Flame Slash", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = FlameSlash;

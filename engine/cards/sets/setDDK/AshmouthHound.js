"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshmouthHound extends UnimplementedCard {
  constructor(game) {
    super(game, "Ashmouth Hound", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AshmouthHound;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Child of Night", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ChildofNight;

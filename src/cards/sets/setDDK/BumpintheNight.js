"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BumpintheNight extends UnimplementedCard {
  constructor(game) {
    super(game, "Bump in the Night", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = BumpintheNight;

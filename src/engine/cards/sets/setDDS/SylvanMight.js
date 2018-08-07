"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanMight extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Might", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = SylvanMight;

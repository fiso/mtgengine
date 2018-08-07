"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingSavagery extends UnimplementedCard {
  constructor (game) {
    super(game, "Increasing Savagery", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = IncreasingSavagery;

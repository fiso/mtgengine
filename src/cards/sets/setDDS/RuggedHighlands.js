"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuggedHighlands extends UnimplementedCard {
  constructor (game) {
    super(game, "Rugged Highlands", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RuggedHighlands;

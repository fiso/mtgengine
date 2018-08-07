"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GutturalResponse extends UnimplementedCard {
  constructor (game) {
    super(game, "Guttural Response", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = GutturalResponse;

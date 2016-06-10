"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrbanEvolution extends UnimplementedCard {
  constructor (game) {
    super(game, "Urban Evolution", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = UrbanEvolution;

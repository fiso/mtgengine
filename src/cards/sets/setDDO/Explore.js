"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Explore extends UnimplementedCard {
  constructor (game) {
    super(game, "Explore", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Explore;

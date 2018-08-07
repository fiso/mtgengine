"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Advocate", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = SylvanAdvocate;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieMechanist extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Mechanist", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = FaerieMechanist;

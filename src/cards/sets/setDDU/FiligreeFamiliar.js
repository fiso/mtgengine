"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiligreeFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Filigree Familiar", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = FiligreeFamiliar;

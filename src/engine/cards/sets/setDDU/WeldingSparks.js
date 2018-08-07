"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeldingSparks extends UnimplementedCard {
  constructor (game) {
    super(game, "Welding Sparks", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = WeldingSparks;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RegalForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Regal Force", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = RegalForce;

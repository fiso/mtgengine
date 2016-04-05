"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NessianAsp extends UnimplementedCard {
  constructor(game) {
    super(game, "Nessian Asp", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NessianAsp;

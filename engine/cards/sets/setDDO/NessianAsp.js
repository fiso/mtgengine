"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NessianAsp extends Card {
  constructor(game) {
    super(game, "Nessian Asp", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NessianAsp;

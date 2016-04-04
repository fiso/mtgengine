"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwiftJustice extends Card {
  constructor(game) {
    super(game, "Swift Justice", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = SwiftJustice;

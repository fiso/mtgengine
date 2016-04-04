"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MesmericFiend extends Card {
  constructor(game) {
    super(game, "Mesmeric Fiend", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MesmericFiend;

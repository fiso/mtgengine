"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevilsPlay extends Card {
  constructor(game) {
    super(game, "Devil's Play", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DevilsPlay;

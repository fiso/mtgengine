"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recoup extends Card {
  constructor(game) {
    super(game, "Recoup", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Recoup;

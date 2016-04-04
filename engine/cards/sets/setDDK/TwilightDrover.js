"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwilightDrover extends Card {
  constructor(game) {
    super(game, "Twilight Drover", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = TwilightDrover;

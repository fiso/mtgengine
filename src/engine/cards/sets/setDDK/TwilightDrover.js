"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwilightDrover extends UnimplementedCard {
  constructor (game) {
    super(game, "Twilight Drover", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = TwilightDrover;

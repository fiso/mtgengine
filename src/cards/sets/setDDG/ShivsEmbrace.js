"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivsEmbrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Shiv's Embrace", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ShivsEmbrace;

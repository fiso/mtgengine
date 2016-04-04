"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivsEmbrace extends Card {
  constructor(game) {
    super(game, "Shiv's Embrace", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ShivsEmbrace;

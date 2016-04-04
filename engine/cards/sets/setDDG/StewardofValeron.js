"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StewardofValeron extends Card {
  constructor(game) {
    super(game, "Steward of Valeron", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = StewardofValeron;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StewardofValeron extends UnimplementedCard {
  constructor (game) {
    super(game, "Steward of Valeron", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = StewardofValeron;

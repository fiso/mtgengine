"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporaryInsanity extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporary Insanity", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = TemporaryInsanity;

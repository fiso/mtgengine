"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaladinofPrahv extends UnimplementedCard {
  constructor (game) {
    super(game, "Paladin of Prahv", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = PaladinofPrahv;

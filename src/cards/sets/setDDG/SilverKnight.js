"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Silver Knight", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SilverKnight;

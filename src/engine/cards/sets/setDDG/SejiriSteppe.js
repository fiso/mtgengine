"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SejiriSteppe extends UnimplementedCard {
  constructor (game) {
    super(game, "Sejiri Steppe", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SejiriSteppe;

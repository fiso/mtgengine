"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightExemplar extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight Exemplar", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightExemplar;

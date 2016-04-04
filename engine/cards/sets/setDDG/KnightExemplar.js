"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightExemplar extends Card {
  constructor(game) {
    super(game, "Knight Exemplar", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightExemplar;

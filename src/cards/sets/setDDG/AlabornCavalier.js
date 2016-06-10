"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabornCavalier extends UnimplementedCard {
  constructor (game) {
    super(game, "Alaborn Cavalier", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = AlabornCavalier;

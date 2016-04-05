"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishLancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Lancer", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BenalishLancer;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofMeadowgrain extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of Meadowgrain", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightofMeadowgrain;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MordantDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mordant Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = MordantDragon;
